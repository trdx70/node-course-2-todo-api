//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID("5966c04eda1886d7282c2790")
// },{
//   $set: {
//     completed: true
//   }
// },{
//   returnOriginal: false
// }).then((result)=>{
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID("5966a726b25dda3f69f8b417")
},{
  $set: {
    name: 'Barack Obama'
  },
    $inc: {
      age: 1
    }

},{
  returnOriginal: false
}).then((result)=>{
  console.log(result);
});

  db.close();
});
