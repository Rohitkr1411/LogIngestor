const express = require('express');
const logsController=require("../controllers/logsController");
const router= express.Router();

router.get("/logs",logsController.getAllLogs);

router.get("/addlogs",logsController.addPage);

router.post("/addLogs",async(req,res)=>{
   await  logsController.addLogs(req,res).then(() => {
   const message = `Data inserted Successfully`;
   res.status(200).send({ message});
   })
   .catch((error) => {
    console.error('Error inserting logs:', error);
    //db.close(); // Close the database connection on error
  });
});

router.post("/insertData",async(req,res)=>{
    await logsController.insertData(req,res).then(() => {
        const enteredLogs = req.body.enteredLogs?req.body.enteredLogs:100;
        const message = `Generated ${enteredLogs} logs successfully`;
        res.status(200).send({ message});
        console.log('Insertion completed');
      })
      .catch((error) => {
        console.error('Error inserting logs:', error);
        //db.close(); // Close the database connection on error
      });
    
});



module.exports =router;


