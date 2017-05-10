'use strict';
var exports =module.exports={};

 exports.Car  = class Car{
  constructor(name="General",model="GM"){
        this.name = name;
        //this.type = type;
        this.model = model;
  }

  drive(){

  }

  numOfDoors(name){
    if (name === 'Porshe' || name === 'Koenigsegg'){
      return 2;
    }
    else {
      return 4;
    }
  }


}
