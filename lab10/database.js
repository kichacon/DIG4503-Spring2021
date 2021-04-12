import MongoClient from 'mongodb';

const url = "mongodb+srv://KiaraChacon:jvSTx5EKRKWgmudW@cluster0.yuzwq.mongodb.net";

class Database {
    async connect() {
        
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });
       
        this.database = this.connection.db("lab10");
        
        this.collection = this.database.collection("people");
        
        collection.people.insertOne({
            firstName: "Kiara",
            lastName: "Chacon",
            favoriteColor: "Purple"
    });
        collection.findOne({}).toArray((error, document) => {
        if(error) {
            throw error;
        }
        console.log(document)
        });
        }

    close() {
    if(this.collection != null) {
      this.collection.close();
    }
    }
    }

export default Database;