const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
app.use(express.static('static'));
app.use(bodyParser.json());
const validIssueStatus = {
	New: true,
	Open: true,
	Assigned: true,
	Fixed: true,
	Verified: true,
	Closed: true,
};
const issueFieldType = {
	id: 'required',
	status: 'required',
	owner: 'required',
	effort: 'optional',
	created: 'required',
	completionDate: 'optional',
	title: 'required',
};
function validateIssue(issue){
	for(const field in issueFieldType){
		const type= issueFieldType[field];
		if(!type){
			delete issue[field];
		}else if(type=== 'required' && !issue[field]){
			return `${field} id required.`;
		}
	}
	if(!validIssueStatus[issue.status])
		return `${issue.status} is not a valid status.`;
	return null;
}
app.post('/api/issues',(req,res) =>{
	const newIssue =req.body;
	newIssue.id=issues.length+1;
	newIssue.created=new Date();
	if(!newIssue.status)
		newIssue.status = 'New';
	const err = validateIssue(newIssue)
	if(err){
		res.status(422).json({message: `Invalid requrest: ${err}` });
		return;
	}
	issues.push(newIssue);
});
const issues = [
	{
　      id: 1,status: 'Open',owener: 'Ravan',
        created: new Date('2019-05-06'),effort: 5,completionDate: undefined,
        title: 'Error in console when clicking Add',
        },
	{
	id: 2,status: 'Assigned',owener: 'Ravan',
	created:new Date('2019-05-06'),effort: 14,
	completionDate:new Date('2019-05-06'),
	title: 'Missing bottom border on panel',
	},
];
app.get('/api/issues', (req, res) => {
  db.collection('issues').find().toArray().then(issues => {
    const metadata = { total_count: issues.length };
    res.json({ _metadata: metadata, records: issues })
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});
let db;
MongoClient.connect('mongodb://localhost/issuetracker').then(connection => {
  db = connection;
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});
