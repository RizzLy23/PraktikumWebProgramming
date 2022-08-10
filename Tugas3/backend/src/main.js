import express from 'express'

const app = express();

app.use(express.json());

const port = 5000;

app.get("/food", (req, res) => {
    res.send([
        {
            id: 1,
            nama: "Seblak Tahu",
        },
        {
            id: 2,
            nama: "Ayam Suwir",
        },
        {
            id: 3,
            nama: "Mie Goreng",
        },
    ]);
});

app.get("/drink", (req, res) => {
    res.send([
        {
            id: 1,
            nama: "Ice Jeruk",
        },
        {
            id: 2,
            nama: "Cold Brew",
        },
        {
            id: 3,
            nama: "Espereso",
        },
    ]);
});

app.post("/create", (req, res) => {
    res.send({ nama : req.body });
});

app.listen(port, () => {
    console.log(`Aplikasi Berjalan Di Port : ${port}`);
});