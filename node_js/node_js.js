const express = require('express')

const app = express()


app.get('/',(req,res)=>{

    const myhtml = '<h2>HELLas sasdadfsdf dO</h2>';

    res.send(myhtml)

})

app.listen(8080,()=>{
    console.log('START SsdfERVEasd R')
})


// const http = require('http')


// const server = http.createServer((req,res)=>{

//     res.write("<h1>HELLO NOsdfsdfsdf sdfsdDasdE JS</h1>")
//     res.write("<h1>HELLO NOsdfsdfsdf sdfsdfsdfsdDasdE JS</h1>")
//     res.end()


// })

// server.listen(8080)