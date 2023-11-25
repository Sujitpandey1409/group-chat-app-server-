const express = require('express')
const cors = require('cors');
app = express()

const corsOptions = {
    // origin: 'http://localhost:3000', // Allow requests from this origin
    origin: 'https://sujit-hello-app.netlify.app/', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies, authorization headers
  };
  
app.use(cors(corsOptions));

app.use(express.json());
let message = []

app.get('/',(req,res)=>{
    res.send(message)
})


app.post('/',(req,res)=>{
    const updateMessage = req.body
    if (updateMessage){
        message.push(updateMessage)
        res.status(200).send('Message added successfully');
    } else {
        res.status(400).send('Invalid message format');
    }
})
app.delete('/',(req,res)=>{
    message=[]
    res.status(400).send('deleted succesfully')
})
app.listen(4001)