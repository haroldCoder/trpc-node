"use strict"
import app from "./app"


const server : any = app.listen(0, async()=>{
    console.log(`server is open ${server.address().port}`);
})