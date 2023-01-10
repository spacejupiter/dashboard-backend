const {dashController} = require('../controller/routes.controller')

module.exports = function(router){
  router.post('/api/create',(req,res)=>{dashController.createData(req,res)});

  router.get('/api/data',(req,res) => {
    dashController.getData(req,res);
  });
}
