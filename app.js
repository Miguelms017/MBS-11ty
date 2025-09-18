import express from 'express'

import cors from 'cors'

import { create } from "./database.js";

const app = express();

app.use(cors());

app.use(express.json())

app.post('/Appts', async (req, res) => {
    try {
        const { Fname, Lname, phone, email, date, service, description } = req.body;
        const apt = await create(Fname, Lname, phone, email, date, service, description)
        res.status(201).json({
            success: true,
            message: "Appontment saved",
            data: apt,
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ success: false , message: "server error"});
    }
})

app.use(express.static("public"))

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!')
})

app.listen(3000 , () => {
    console.log("server running at port 3000");
})