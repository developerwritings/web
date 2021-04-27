const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/download', function(req, res){
  const file = `${__dirname}/sample/Web_Development_with_Node_Express.pdf`;
  res.download(file); // Set disposition and send it.
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

