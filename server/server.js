const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const { query, validationResult } = require("express-validator");

// Konfigurasi database
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "pwl_10",
});

// API GET Transaksi
app.get(
  "/mutasi",
  [
    query("startDate").optional().isDate().withMessage("Start date must be a valid date"),
    query("endDate").optional().isDate().withMessage("End date must be a valid date"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    const { startDate, endDate } = req.query;

    let query = "SELECT * FROM transaksi";
    const params = [];

    if (startDate || endDate) {
      query += " WHERE";
      if (startDate) {
        query += " tanggal >= ?";
        params.push(startDate);
      }
      if (endDate) {
        if (params.length > 0) query += " AND";
        query += " tanggal <= ?";
        params.push(endDate);
      }
    }

    query += " ORDER BY tanggal DESC, created_at DESC";

    pool.getConnection((err, connection) => {
      if (err) return res.status(500).json({ message: "Database connection error", error: err });

      connection.query(query, params, (err, rows) => {
        connection.release();

        if (err) {
          return res.status(500).json({ message: "Query execution error", error: err });
        }
        return res.status(200).json({ data: rows });
      });
    });
  }
);

// API POST Transaksi
app.post("/transaksi", jsonParser, (req, res) => {
  const params = req.body;
  const nominal = Number(params.nominal);

  if (nominal <= 0) {
    return res.status(400).json({ message: "Nominal tidak valid" });
  }

  pool.getConnection((err, connection) => {
    if (err) return res.status(500).json({ message: "Database connection error", error: err });

    connection.query("SELECT saldo FROM transaksi ORDER BY id DESC LIMIT 1", (err, rows) => {
      if (err) {
        connection.release();
        return res.status(500).json({ message: "Query execution error", error: err });
      }

      const lastBalance = rows.length > 0 ? rows[0].saldo : 0;
      let updateBalance = lastBalance;

      if (params.keterangan.toLowerCase() === "setor") {
        updateBalance += nominal;
      } else if (params.keterangan.toLowerCase() === "tarik") {
        updateBalance -= nominal;
      } else if (params.keterangan.toLowerCase() === "bank") {
        updateBalance -= nominal;
      } else if (params.keterangan.toLowerCase() === "virtual account") {
        updateBalance -= nominal;
      } else {
        connection.release();
        return res.status(400).json({ message: "Keterangan Tidak Valid" });
      }

      if (updateBalance < 0) {
        connection.release();
        return res.status(400).json({ message: "Saldo tidak mencukupi" });
      }

      const currentDate = new Date(); // Tanggal saat ini
      const formattedDate = currentDate; // Format: YYYY-MM-DD
      console.log("Keterangan:", params.keterangan);

      connection.query(
        "INSERT INTO transaksi SET ?",
        {
          ...params,
          saldo: updateBalance,
          tanggal: formattedDate, // Tanggal transaksi
        },
        (err, rows) => {
          connection.release();
          if (err) {
            console.log("di akhir");
            return res.status(500).json({ message: "Query execution error", error: err });
          }
          return res.status(200).json({ message: "Transaksi berhasil", data: rows });
        }
      );
    });
  });
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
