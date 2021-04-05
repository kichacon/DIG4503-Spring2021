import MongoClient from 'mongodb';

const url = "mongodb+srv://KiaraChacon:jvSTx5EKRKWgmudW@cluster0.yuzwq.mongodb.net";

class Database {
    async connect() {
        // Wait for the connect() method to finish.
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });
        // Select a database.
        this.database = this.connection.db("lab10");
        // Select a collection.
        this.collection = this.database.collection("people");
        collection.insertOne({
            "firstName": "Kiara",
            "lastName": "Chacon",
            "favoriteColor": "Purple"
    });
        this.collection.findOne({
            
        })
}

close() {
    if(this.collection != null) {
      this.collection.close();
    }
  }
}

export default Database;