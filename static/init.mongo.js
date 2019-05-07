db = new Mongo().getDB('issuetracker');
db.issues.remove({});
db.issues.insert([
		{
			status: 'Open',owner; 'Ravan',
			created: new Date('2019-05-07'), effort:5,
			completionDate: undefined;
			title: 'Error in console when clicking Add',
		},
		{
			status: 'Assigned',owner: 'Eddie',
			created: new Date('2019-05-08'),effort: 14,
			completionDate: new Date('2019-05-08'),
			title: 'Missing bottom border on panel',
		},
	]);
db.issues.createdIndex({ status: 1});
db.issues.createdIndex({ owner: 1});
db.issues.createdIndex({ created: 1});
