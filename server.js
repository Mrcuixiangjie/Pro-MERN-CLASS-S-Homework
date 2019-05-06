const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('static'));
app.use(bodyParser.json());
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
app.post('/api/issues',(req,res) =>{
	const newIssue = req.body;
	newIssue.id = issues.length+1;
	newIssue.created = new Date();
	if(!newIssue.status)
		newIssue.status = 'New';
	issues.push(newIssue);
	res.json(newIssue);
});
app.get('/api/issues',(req,res) =>{
	const metadata = {total_count: issues.length };
	res.json({ _metadata: metadata, records: issues });
});
app.listen(3000,() =>{
	console.log('App Started on port 3000');
});
