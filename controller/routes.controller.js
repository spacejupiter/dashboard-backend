const db = require( '../database/db');
var database = new db();

module.exports.dashController = {
  createData : (req,res) => { 
    
  },

  getData : (req,res) =>{
      database.getData().then( data => {res.send(data);})
  }
}