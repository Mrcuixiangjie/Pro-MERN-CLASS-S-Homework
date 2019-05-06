const express = require('express');
const app = express();
app.use(express.static('static'));
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
app.get('/api/issues',(req,res) =>{
	const metadata = {total_count: issues.length };
	res.json({ _metadata: metadata, records: issues });
});
app.listen(3000,() =>{
	console.log('App Started on port 3000');
});
