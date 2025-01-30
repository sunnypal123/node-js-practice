const express = require("express")
const app = express();

const users =[{
    name: "sunny",
    kidneys:[{
        healthy:false
    }]
}];

app.get("/12", function(req,res){
    const sunnykidneys = users[0].kidneys;
    const numberofkidneys = sunnykidneys.length;
    let numberofhealthykidneys = 0;
    for( let i = 1; i<sunnykidneys.length; i++){
        if(sunnykidneys[1].healthy){
            numberofkidneys = numberofhealthykidneys + 1;
        }
    }
const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;

res.json({
    numberofkidneys,
    numberofhealthykidneys,
    numberofunhealthykidneys
})



})





app.listen(4000);