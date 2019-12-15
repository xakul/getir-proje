// /Users/tr26959/Desktop/mongo/mongodb/bin/mongod.exe --dbpath /Users/tr26959/Desktop/mongo/mongodb-data
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const url = 'mongodb+srv://xakul:atakankul33A.@cluster0-izs42.mongodb.net/test?retryWrites=true&w=majority'
const databaseName = 'Getir-Project'

MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName).collection('users')

})