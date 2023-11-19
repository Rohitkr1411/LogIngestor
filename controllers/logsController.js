
const LogModel = require('../models/logs');

exports.getAllLogs = async (req, res) => {

    try {
        const filter = {};
        if (req.query.level) filter.level = req.query.level;
        if (req.query.startDate && req.query.endDate) {
            filter.timestamp = {
                $gte: new Date(req.query.startDate),
                $lte: new Date(req.query.endDate),
            };
        }

        if (req.query.parentResourceId) {
            filter['metadata.parentResourceId'] = { $regex: new RegExp(req.query.parentResourceId, 'i') }; 
        }
        if (req.query.traceId) {
            filter.traceId = { $regex: new RegExp(req.query.traceId, 'i') }; 
        }
        if (req.query.commit) {
            filter.commit = { $regex: new RegExp(req.query.commit, 'i') }; 
        }
        if (req.query.spanId) {
            filter.spanId = { $regex: new RegExp(req.query.spanId, 'i') }; 
        }
        if (req.query.message) {
            filter.message = { $regex: new RegExp(req.query.message, 'i') }; 
        }
        if (req.query.resourceId) {
            filter.resourceId = { $regex: new RegExp(req.query.resourceId, 'i') }; 
        }

        const logs = await LogModel.find(filter);
        res.render('log.ejs', { logs,filter:req.query });
    }
    catch (err) {
        console.log("error in controllers/postController.js", err);
    }
}


exports.insertData= async(req,res)=>{
    const enteredLogs = req.body.enteredLogs?req.body.enteredLogs:100;
    const getRandomTimestamp = () => {
        const start = new Date(2023, 0, 1); // January 1, 2023
        const end = new Date(); // Current date
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      };
    // Function to generate random log data
  const generateRandomLog = () => ({
    level: ['error', 'info', 'warning'][Math.floor(Math.random() * 3)],
    message: `Random message ${Math.floor(Math.random() * 1000)}`,
    resourceId: `server-${Math.floor(Math.random() * 10000)}`,
    timestamp: getRandomTimestamp(),
    traceId: Math.random().toString(36).substring(2, 10), // Random alphanumeric string
    spanId: `span-${Math.floor(Math.random() * 10000)}`,
    commit: Math.random().toString(16).substring(2, 8), // Random hexadecimal string
    metadata: {
      parentResourceId: `server-${Math.floor(Math.random() * 10000)}`
    }
  });
    const chunkSize=1000;
    //const logsToSave= req.body
    
    
    const logsToSave = Array.from({ length: enteredLogs}, generateRandomLog);
    //console.log(logsToSave)
    try{
        for (let i = 0; i < logsToSave.length; i += chunkSize) {
            const chunk = logsToSave.slice(i, i + chunkSize);
            try {
              await LogModel.insertMany(chunk);
              console.log(`Inserted ${chunk.length} logs`);
            //  res.status(200).send({ insertedCount });
              
            } catch (error) {
              console.error('Error inserting logs:', error);
            }
          }
console.log("Logs Inserted")
}catch (error) {
    console.error('Error inserting random logs:', error);
  }

  
}

exports.addLogs= async(req,res)=>{
    
    const chunkSize=1000;
    
    
    
    const logsToSave = Array.isArray(req.body) ? req.body : [req.body];
   
    try{
        for (let i = 0; i < logsToSave.length; i += chunkSize) {
            const chunk = logsToSave.slice(i, i + chunkSize);
            try {
              await LogModel.insertMany(chunk);
              console.log(`Inserted ${chunk.length} logs`);
            //  res.status(200).send({ insertedCount });
              
            } catch (error) {
              console.error('Error inserting logs:', error);
            }
          }
console.log("Logs Inserted")
}catch (error) {
    console.error('Error inserting random logs:', error);
  }

  
}


exports.addPage = async (req, res) => {

    try {
        res.render('addlogs.ejs');
    }
    catch (err) {
        console.log("error in controllers/postController.js", err);
    }
}