var five = require("johnny-five");
let properties = require("./properties.json");



class RelayService {
  constructor() {
    console.log("building Relay Service")
    let relayOne = properties.relays.relayOne;
    let relayTwo = properties.relays.relayTwo;
    let relayThree = properties.relays.relayThree;
    let relayFour = properties.relays.relayFour;
    
    let relay1 = new five.Relay({
      pin: relayOne.pin, 
      type: relayOne.type
    });
    
    let relay2 = new five.Relay({
      pin: relayTwo.pin, 
      type: relayTwo.type
    });
    
    let relay3 = new five.Relay({
      pin: relayThree.pin, 
      type: relayThree.type
    });
    
    let relay4 = new five.Relay({
      pin: relayFour.pin, 
      type: relayFour.type
    });
    
  }
  
  setOn(relayId) {
    
  }
  
  setOff(relayId){
    
  }
}