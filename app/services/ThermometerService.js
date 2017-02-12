'use strict'

var five = require("johnny-five");
let properties = require("./properties.json");

let thermoPin = properties.thermometer.pin;
let thermoType = properties.thermometer.type;

class RelayService {
  constructor() {

    let this.thermometer = new five.Thermometer({
      controller: "DS18B20",
      pin: "A0"
    });
  }
  
  listen(){
    thermometer.on("change") =  function() {
    console.log(this.celsius + "°C");
  });  
  }
  
  
}