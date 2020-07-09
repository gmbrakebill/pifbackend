
const Pool = require("pg").Pool;
const pool = new Pool({
    user: "masonbrakebill",
    password: "admin",
    host: "localhost",
    port: 5432,
    database: "pif"
})

function getAirman(req,res)
{
    pool.query("SELECT * FROM airman", (error,results) =>{
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.send(results.rows)
        }
    })
}
function getPIFData(req,res)
{
    pool.query("SELECT * FROM pif_data", (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).send()
        } else {
            res.send(results.rows)
        }
    })
}
function getWapsData(req,res)
{
    pool.query("SELECT * FROM WAPS", (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).send()
        } else {
            res.send(results.rows)
        }
    })
}
function getAirmanById(req,res)
{
    pool.query("SELECT * FROM airman WHERE amn_id = $1 ", [req.params.id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).send()
        } else {
            res.send(results.rows)
        }
    })
}
function getPifByID(req,res)
{
    pool.query("SELECT * FROM pif_data WHERE id = $1 ", [req.params.id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).send()
        } else {
            res.send(results.rows)
        }
    })
}
function deletePifByID(req,res)
{
    pool.query("DELETE FROM pif_data WHERE id = $1 ", [req.params.id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).send()
        } else {
            res.send(results.rows)
        }
    })
}
function getWapsById(req,res)
{
    pool.query("SELECT * FROM WAPS WHERE id = $1 ", [req.params.id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).send()
        } else {
            res.send(results.rows)
        }
    })
}
function getWapsDataForAirman(req,res)
{
    pool.query("SELECT a.rank AS rank, a.first_name AS first_name, a.last_name AS last_name, b.time_in_service AS time_in_service, b.time_in_grade AS time_in_grade, b.EPR_data AS EPR_data FROM airman AS a FULL JOIN WAPS as b on a.amn_id = b.pif_data_id WHERE id = $1 ", [req.params.id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).send()
        } else {
            res.send(results.rows)
        }
    })
}
function getPIFDataForAirman(req,res)
{
    pool.query("SELECT a.rank AS rank, a.first_name AS first_name, a.last_name AS last_name, b.LOC AS LOC, b.LOR AS LOR, b.LOA AS LOA, b.WAPS AS WAPS, b.last_review_date AS last_review_date FROM airman AS a FULL JOIN pif_data as b on a.amn_id = b.airman_id WHERE id = $1 ", [req.params.id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).send()
        } else {
            res.send(results.rows)
        }
    })
}
function getAllData(req,res)
{
    pool.query("select airman.rank, airman.first_name, airman.last_name, pif_data.airman_id, pif_data.LOC, pif_data.lor, pif_data.loa,pif_data.waps,pif_data.last_review_date, WAPS.pif_data_id, WAPS.time_in_service, WAPS.time_in_grade, WAPS.EPR_data FROM((airman INNER JOIN pif_data ON airman.amn_id = pif_data.airman_id) INNER JOIN WAPS ON pif_data.airman_id = waps.pif_data_id) WHERE airman.amn_id = $1 ", [req.params.id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).send()
        } else {
            res.send(results.rows)
        }
    })
}
function getAllDatawithoutid(req,res)
{
    pool.query("select airman.rank, airman.first_name, airman.last_name, pif_data.airman_id, pif_data.LOC, pif_data.lor, pif_data.loa,pif_data.waps,pif_data.last_review_date, WAPS.pif_data_id, WAPS.time_in_service, WAPS.time_in_grade, WAPS.EPR_data FROM((airman INNER JOIN pif_data ON airman.amn_id = pif_data.airman_id) INNER JOIN WAPS ON pif_data.airman_id = waps.pif_data_id)", (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).send()
        } else {
            res.send(results.rows)
        }
    })
}
function createNewAirman(req,res)
{
    pool.query("INSERT INTO airman (rank, first_name, last_name) VALUES ($1,$2,$3) ", [req.body.rank, req.body.firstName, req.body.lastName], (error,results) =>
    {
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(201).send();
        }

    })
}
function createNewWaps(req,res)
{
    pool.query("INSERT INTO WAPS(time_in_service, time_in_grade, EPR) VALUES ($1,$2,$3) ", [req.body.rank, req.body.firstName, req.body.lastName], (error,results) =>
    {
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(201).send();
        }

    })
}
function createNewPif(req,res)
{
    pool.query("INSERT INTO pif_data(LOC, LOR, LOA, WAPS, last_review_date) VALUES ($1,$2,$3,$4,$5) ", [req.body.LOC, req.body.LOR, req.body.LOA, req.body.WAPS, req.body.last_review_date], (error,results) =>
    {
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(201).send();
        }

    })
}
function deleteAirman(req,res)
{
    pool.query("DELETE FROM airman WHERE amn_id = $1", [req.params.id], (error, results) =>
    {
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(204).send();
        }
    })
}
function updateAirman(req,res)
{
    pool.query("UPDATE airman SET rank = $1, first_name = $2, last_name = $3 WHERE id = $4",[req.body.rank, req.body.firstName, req.body.lastName, req.params.id], (error,results) =>
    {
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(202).send();
        }
    }) 
}

module.export = pool;
exports.createNewPif = createNewPif;
exports.getAllDatawithoutid = getAllDatawithoutid;
exports.updateAirman = updateAirman;
exports.getAllData = getAllData;
exports.deletePifByID = deletePifByID;
exports.deleteAirman = deleteAirman;
exports.createNewWaps = createNewWaps;
exports.createNewAirman = createNewAirman;
exports.getPIFDataForAirman = getPIFDataForAirman;
exports.getWapsDataForAirman = getWapsDataForAirman;
exports.getWapsById = getWapsById;
exports.getPifByID = getPifByID;
exports.getAirman = getAirman;
exports.getPIFData = getPIFData;
exports.getWapsData = getWapsData;
exports.getAirmanById = getAirmanById;


