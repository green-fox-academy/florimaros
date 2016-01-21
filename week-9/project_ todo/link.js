mongoClient(function(err, db) { var todos = db.collection('todos').find({}).toArray(function(err, docs) { console.log(docs); }); });
