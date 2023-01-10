const {dashData} = require('../database/data');

class database{
  constructor(){
    this.data = dashData

  }

  saveData(tag,userData){
    this.data.tag = userData;
  }

  getData(){
    return new Promise((resolve,reject) =>{
      resolve(this.data);
    });
   
  }
}

module.exports = database;