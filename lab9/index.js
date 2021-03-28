import MongoClient from 'mongodb';

const URL = "";

MongoClient.connect(URL, { useUnifiedTopology: true})
.then(connection => {
    let database = connection.db("sample_restaurants");
    let collection = database.collection("restaurants");

    let cursor = collection.find({"grades.grade": "A", cusine: "Bakery"});

    cursor.forEach(document => {
        console.log(document.title);
    }, () => {
        connection.close();
    });

})
.catch(error => {
    console.log("Error" + error);
});