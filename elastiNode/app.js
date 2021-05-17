const express = require("express")
const bodyParser = require("body-parser")
const elasticsearch = require("elasticsearch")
const app = express()
app.use(bodyParser.json())


const esClient = elasticsearch.Client({
    host: "http://127.0.0.1:9200",
})



app.post("/products", (req, res) => {
	
    console.log(req.body)
    esClient.index({
        index: 'products',
        body: {
            "id": req.body.id,
            "name": req.body.name,
            "price": req.body.price,
            "description": req.body.description,
        }
    })
    .then(response => {
        return res.json({"message": "Indexing successful"})
    })
    .catch(err => {
         return res.status(500).json({"message": "Error"})
    })
})


app.get("/products", (req, res) => {
    const searchText = req.query.text
    esClient.search({
        index: "products",
        body: {
            query: {
                match: {"name": searchText.trim()}
            }
        }
    })
    .then(response => {
    console.log(response)
        return res.json(response)
    })
    .catch(err => {
        return res.status(500).json({"message": "Error"})
    })
})


app.listen(process.env.PORT || 3000, () => {
    console.log("connected")
})
