const express = require('express')

const app = express()


app.get('/',(req,res)=> res.json([{  
      name:'JSON',
      email:'oloponnyolo@gmail.com'
},{

    name_2:'JSON_2',
    email:'oloponnyolo@gmail_2.com'


},{

    name_2:'JSON_3',
    email:'oloponnyolo@gmail_2.com'


}]))

app.listen(8000,()=>{
    console.log('HELLO docker!!')
})


// const http = require('http


// const server = http.createServer((req,res)=>{

//     res.write("<h1>HELLO NOsdfsdfsdf sdfsdDasdE JS</h1>")
//     res.write("<h1>HELLO NOsdfsdfsdf sdfsdfsdfsdDasdE JS</h1>")
//     res.end()


// })

// server.listen(8080)