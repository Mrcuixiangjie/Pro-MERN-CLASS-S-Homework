'use strict'
const MongoClient = require('mongodb');

function usage(){
	console.log('Usage:');
	console.log('node',_filename,'<option>');
	console.log('Where option is one of:');
	console.log(' callbacks Use the callbacks paradigm');
	console.log(' promises Use the Promises paradigm');
	console.log(' generator Use the Generator paradigm');
	console.log(' async Use the async moudle');
}

if(process.argv.length < 3){
	console.log("Incorrect number of arguments");
	usage();
}else{
	if(process.argv[2] === 'callbacks'){
		testWithCallbacks();
	}else if(process.argv[2] === 'promises'){
		testWithPromises();
	}else if(process.argv[2] === 'generator'){
                testWithGenerator();
        }
        else if(process.argv[2] === 'async'){
                testWithAsync();
        }else{
		console.log("Invalid option",process.argv[2]);
		usage();
	}
}
function testWithCallbacks(){
	MongoClient.connect('mongodb://localhost/playground',function(err,db){
		db.collection('employees').insertOne({id: 1, name: 'A.Callback'},
			function(err,result){
				console.log("Result if insert:",result.insertedId);
				db.collection('employees').find({id: 1}).toArray(function(err,docs){
					console.log('Result of find:',docs);
					db.close();
				});
			});
	});
}