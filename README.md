# LogIngestor
Service is deployed on Cloud platform : https://logingestor-jb17.onrender.com/  <br/>
<br/>
How to Run the code locally:<br/>
### Step 1
```npm install ``` <br/>
  >It will install all the necessary dependencies required to run the code.
### Step 2
The application is running on PORT:300, To start The application Use:<br/>
``` nodemon index.js ```

## FrontEnd:
![image](https://github.com/Rohitkr1411/LogIngestor/assets/66077868/12d0171d-f8e8-494f-a9cc-bb44cb91f4ed)

### There are three features provided here:
### ADD Logs:
 In this feature the user can add the json data in the below format:
 ```{
	"level": "error",
	"message": "Failed to connect to DB",
    "resourceId": "server-1234",
	"timestamp": "2023-09-15T08:00:00Z",
	"traceId": "abc-xyz-123",
    "spanId": "span-456",
    "commit": "5e5342f",
    "metadata": {
        "parentResourceId": "server-0987"
    }
}
```
<br/>

Also huge amount of data amount of data can be added in the json form or inside the vector. For Eg {},{},{}... or [{},{},{}...]


### ALL Logs:
In this feature all the logs that are uploaded in the mongoDB Atlas will be displayed and the filter options will be there to filer the data.<br/>
> Regex is used for filtering the data so even the partially enterted data will be matched
![image](https://github.com/Rohitkr1411/LogIngestor/assets/66077868/ae60f82a-7a89-46b6-b261-a6bda7337d55)

<br/>

### Generate Random Logs:
Using this option the user will be able to generate random Logs.The user has to type the number in the given text bar and that number of random logs will be uploaded in the Database.

>For Filtering the data the user has to give the appropirate filter option and click on the filter logs button.

## Features
- This system can efficiently handle vast volumes of log data. Chunks are used for uploading data to MongoDb which are very efficient as the data is processedin more managable pieces and scalability is increased as it allows system to handle large files without hitting limitations.
- For enhancing the search feature indexing is used which make search efficient by organising data in structures way.It results in faster query execution and supports scalability as  properly indexed collections ensure consistent and predictable query performance.
- The user can use multiple filters to filter the data and regex is used for filtering which allow to match even the partial known data.

 ### Challenges Faced:
  - To handle large amount of data was difficult so chunk technique was used which can effciently handle large data and even can manage the limitation on one time large data addition in database.
  - To improve the search feature for huge dataset indexing is used on the mongo Db database schema which can perform the searching process quite efficiently.
  - For the testing of application by user a generate random data feature was provided which allow user to add any number of data in the database.
  - For deploying the application on cloud platform the enviroment variables and modules version has to be configured.
