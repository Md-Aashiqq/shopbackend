

import express from "express";
import cors  from "cors";
import products from "./data.mjs";

const app = express();


app.use(cors());

app.get("/", (req, res) => {
        res.send("Hello from Express!");
    });

    app.get("/products/:count", (req, res) => {
        
        const count = req.params.count;
        let filteredProducts = products.slice(0, count);
        res.send(filteredProducts);
    })
    
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });

