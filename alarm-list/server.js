const http = require("http");
const fs = require("fs");

const rows =[
    {
        ALM_DATE: "2026-08-20 08:00:11:123",
        ALM_TEXT: "FAULT",
        ALM_VALUE: 1,
        ALM_REASON_CODE: "",
        ATTRIBUTE_INF_2: "STATION-01"
    }
];

http.createServer((req, res) =>{

    if(req.url === "/")
        res.end(fs.readFileSync("index.html"));

    else if(req.url === "/script.js")
        res.end(fs.readFileSync("script.js"));

    else if(req.url === "/alarm_list.json")
        res.end(fs.readFileSync("alarm_list.json"));

    else if(req.url === "/api/alarms")
        res.end(JSON.stringify(rows));

}).listen(3000);