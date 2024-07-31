const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 9000 ;

//MIDDLEWARE
app.use(cors());
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Bistro Restaurant Server Side ')
});

app.listen(port,()=>{
    console.log(`Bistro Restaurant : ${port}`)
});