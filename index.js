const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// routes/ URL/ENDPOINT utama dengan method GET
app.get('/', (req, res) => {
  res.send('halaman UTAMA')
})
app.get('/hello', (req, res) => {
  res.send('Hello World!')
})
//method POST
app.post('/login', (req, res) => {
    console.log({requestFromOutside: req.body});    
        res.send('Login Berhasil')    
})
//method PUT
app.put('/username', (req, res) => {
    console.log({updateData: req.body});    
        res.send('Update Berhasil')    
})
//method DELETE
app.delete('/delete', (req, res) => {
    console.log({requestFromOutside: req.body});    
        res.send('Delete Berhasil')    
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})