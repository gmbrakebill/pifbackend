const express = require("express");
const app = express();
const cors = require("cors");
const queries = require("./queries")

app.use(cors());
app.use(express.json());


//routes
app.get('/',(req,res) => {
    console.log(req.headers.host)
    res.send("It's alive!")
})

app.get('/airman', (req, res) => {
    queries.getAirman(req,res);
})
app.get('/airmandata/:id', (req, res) => {
    queries.getAllData(req,res);
})
app.post('/api/airman', (req,res) =>{
    queries.createNewAirman(req,res);
})
app.delete('/api/airman/:id', (req, res)=>
{
    queries.deleteAirman(req,res);
})
app.get('/pif', (req, res) => {
    queries.getPIFData(req,res);
})
app.post('/api/waps', (req,res) =>{
    queries.createNewWaps(req,res);
})
app.get('/waps', (req, res) => {
    queries.getWapsData(req,res);
})
app.get('/airman/:id', (req, res) => {
    queries.getAirmanById(req,res);
})
app.get('/pif/:id', (req, res) => {
    queries.getPifByID(req,res);
})
app.delete('/api/pif/:id', (req, res)=>
{
    queries.deletePifByID(req,res);
})
app.get('/waps/:id', (req, res) => {
    queries.getWapsById(req,res);
})
app.get('/api/waps/:id', (req, res) => {
    queries.getWapsDataForAirman(req,res);
})
app.get('/api/pif/:id', (req, res) => {
    queries.getPIFDataForAirman(req,res);
})

app.listen(3000,()=> {
    console.log("Server has started on port 3000.")
})
