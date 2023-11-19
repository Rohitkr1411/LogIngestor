const mongoose = require('mongoose');

// Define a Mongoose schema for your log data
const LogSchema = new mongoose.Schema({
  level: String,
  message: String,
  resourceId: String,
  timestamp: Date,
  traceId: String,
  spanId: String,
  commit: String,
  metadata: {
    parentResourceId: String
  }
});

LogSchema.index({ level: 1 }); // Index on the 'level' field
LogSchema.index({ timestamp: 1 }); // Index on the 'timestamp' field
LogSchema.index({ resourceId: 1 }); 
LogSchema.index({ message: 1 }); 
LogSchema.index({ traceId: 1 }); 
LogSchema.index({ spanId: 1 }); 
LogSchema.index({ 'metadata.parentResourceId': 1 });

// Create a Mongoose model based on the schema
const LogModel = mongoose.model('Logs', LogSchema);

module.exports = LogModel;
