import MongoClient from 'mongodb';

const URL = "mongodb+srv://KiaraChacon:jvSTx5EKRKWgmudW@cluster0.yuzwq.mongodb.net";


class Database {
    constructor(){
       this.connection = null;
       this.database = null;
       this.collection = null; 
    }

    async connect(database, collection) {
        this.connection = await MongoClient.connect(URL);
        this.database = this.connection.db(database);
        this.collection = this.database.collection(collection);
   
    }

    
    CreateOne() {
        this.collection.insertOne({
            ISBN: 4,
            title: "The Great Gatsby", 
            author: "F. Scott Fitzgerald" , 
            description: "Based off the 1920's about a wealthy man pursing a woman who he has always loved"})
    }

    readOne() {
        this.collection.findOne({
            ISBN, title, author, description
        }
    )
    }

    readMany() {
        this.collection.findMany({
            ISBN, title, author, description
        })
    }

    async updateOne(ISBN, title, author, description) {
        if(this.collection != null) {
            const result = await this.collection.updateOne({title: "The Great Gatsby"}, {$set: {title: "The Great Gatsby"}});
        } else {

            return{"updated": 0};
        }

    }

    async deleteOne(ISBN) {
        if(this.collection != null) {
            const result = await this.collection.deleteOne({"ISBN": ISBN});
            return {"deleted": result.deletedCount};
        } else {
            return{"deleted": 0};

            
        }
        }

    close(){
        if(this.collection != null) {
        this.collection.close();
        }
    }
}
export default Database;