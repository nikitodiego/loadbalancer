const express = require('express')
let dt = require("./container.js") 
const app = express();
const PORT = 8083;


if (!PORT) {
    throw new Error("PORT variable not defined");
}

app.get("/api", (req, res) => {
    const data = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    App running at PORT ${PORT}, process id: ${process.pid} <br> producto random: ${dt.random()} `;
    return res.send(data);
});

app.listen(PORT, () => console.log(`Server at ${PORT}`));