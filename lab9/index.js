
import MongoClient from 'mongodb';

const URL = "mongodb+srv://KiaraChacon:jvSTx5EKRKWgmudW@cluster0.yuzwq.mongodb.net";

MongoClient.connect(URL, { useUnifiedTopology: true })
.then(connection => {
    
    let database = connection.db("sample_airbnb");
    let collection = database.collection("listingsAndReviews");

    collection.findOne({minimum_nights: { $eq: "2" } })
    .then((results) => {
        
        // Do something with the results!

        // Close the connection!
        connection.close();
    })
   
})
.catch(error => {
    console.log("Error: " + error);
});