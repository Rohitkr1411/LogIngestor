const mongoose = require('mongoose');

const MongoURI="mongodb+srv://rohitkr:lzC3626eRrHTxFNR@logingestor.wxoezbq.mongodb.net/?retryWrites=true&w=majority"

// file to connect to MongoDb
const mongoDB = async () => {
    try {
      await mongoose.connect(MongoURI);
      console.log("connected")
      }
      catch (error) {
      console.log('err: ',error);
    }
  };
 


module.exports=mongoDB();
