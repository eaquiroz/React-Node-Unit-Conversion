'use strict';
var convert = require('convert-units');

//import temperatureUnit from '../resources/temp';
// import volumeUnit from '../resources/volume';

let volumeUnit =
    {
        "liters": "l",
        "tablespoons":"tsp",
        "cups":"cup",
        "cubic-feet": "ft3",
        "gallons": "gal",
        "cubic-inches": "in3"
    };

let temperatureUnit = {
    "kelvin":"K",
    "celsius":"C",
    "fahrenheit":"F",
    "rankine":"R"
};




const getTemperatureUnit = (req,res)=>{
    let body = req.body;
    let inputUnit = body.inputUnit.toString().toLowerCase();
    let targetUnit = body.targetUnit.toString().toLowerCase();
    let inputValue = body.inputValue;
    let studentResponse = body.studentResponse;

    if( Object.keys(temperatureUnit).indexOf(targetUnit) !== -1 && Object.keys(temperatureUnit).indexOf(inputUnit.toLowerCase()) !== -1 ){
        let result = convert(inputValue).from(temperatureUnit[inputUnit]).to(temperatureUnit[targetUnit]);
        console.log(result,"result");
        res.status(200).json({actualResult:result.toFixed(1),status: (result.toFixed(1) === studentResponse)} );

    }else {
        res.status(200).send({actualResult:'Invalid',status:false});
    }
};

const getVolumeUnit = (req,res)=>{
    let body = req.body;
    let inputUnit = body.inputUnit.toString().toLowerCase();
    let targetUnit = body.targetUnit.toString().toLowerCase();
    let inputValue = body.inputValue;
    let studentResponse = body.studentResponse;


    if(Object.keys(volumeUnit).indexOf(targetUnit) !== -1 && Object.keys(volumeUnit).indexOf(inputUnit) !== -1 ){
        let result = convert(inputValue).from(volumeUnit[inputUnit]).to(volumeUnit[targetUnit]);
        console.log(result,"result");
        res.status(200).json({actualResult:result.toFixed(1),status: (result.toFixed(1) === studentResponse)} );
    }
    else {
        res.status(200).send({actualResult:'Invalid',status:false});
    }
};


const redirectApi = (req,res) => {
    let body = (req.body);
    console.log(body,"body");
    let inputUnit = body.inputUnit.toString().toLowerCase();
    let targetUnit = body.targetUnit.toString().toLowerCase();
    console.log(volumeUnit[inputUnit],volumeUnit[targetUnit]);

    if(Object.keys(volumeUnit).indexOf(targetUnit) !== -1 && Object.keys(volumeUnit).indexOf(inputUnit) !== -1 ){
        getVolumeUnit(req,res);
    } else if(Object.keys(temperatureUnit).indexOf(targetUnit) !== -1 && Object.keys(temperatureUnit).indexOf(inputUnit) !== -1 ){
        getTemperatureUnit(req,res);
    }
    else {
        res.status(200).send({actualResult:'Invalid',status:false});
    }

};

module.exports = {
    redirectApi : redirectApi,
    getVolumeUnit : getVolumeUnit,
    getTemperatureUnit : getTemperatureUnit
};


