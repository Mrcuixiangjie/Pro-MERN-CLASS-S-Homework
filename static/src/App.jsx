const contentNode = document.getElementById('contents');
const issues = [
	{
		id:1,status:'open',owener:'Mr cui',
		created:new Date('2019-04-25'),effort:5,completionDate:undefined,
		title:'Error in console when clicking Add',
	},
	{
		id:2,status:'Assigned',owener:'Mr jies',
		created:new Date('2019-04-25'),effort:14,
		completionDate:new Date('2019-5-01'),
		title:'Missing bottom border on panel',
	},
];
class IssueRow extends React.Component{
	render(){
		const issue=this.props.issue;
		return(
			<tr>
				<td>{issue.id}</td>
				<td>{issue.status}</td>
				<td>{issue.owener}</td>
                                <td>{issue.created.toDateString()}</td>
 				<td>{issue.effort}</td>
                                <td>{issue.completionDate ?
				 issue.completionDate.toDateString() : ''}</td>
				<td>{issue.title}</td>
			</tr>
		)
	}
}
class IssueFilter extends React.Component{
	render(){
		return(
		   <div>This is a placeholder for the Issue Filter.</div>
		)
	}
}
class IssueTable extends React.Component{
	render(){
		const issueRows = this.props.issues.map(issue => <IssueRow
		key={issue.id} issue={issue} />)
		return(
			<table className="bordered-table">
				<thead>
					<tr>
						<th>Id</th>
						<th>Status</th>
						<th>Owener</th>
                                                <th>Created</th>
						<th>Effort</th>
                                                <th>Completion</th>
						<th>Title</th>
					</tr>
				</thead>
				<tbody>
					{issueRows}
				</tbody>
			</table>
		)
	}
}
class IssueAdd extends React.Component{
	render(){
		return(
			<div>This is a placeholder for an Issue Add entry form.</div>
		)
	}
}
class IssueList extends React.Component{
	constructor(){
		super();
		this.state = { issues: [] };
		setTimeout(this.createTestIssue.bind(this),2000);
	}
	componentDidMount(){
		this.loadData();
	}
	loadData(){
		setTimeout( () =>{
			this.setState({issues: issues });
		},500);
	}
	createIssue(newIssue){
		const newIssues=this.state.issues.slice();
		newIssue.id=this.state.issues.length+1;
		newIssues.push(newIssue);
		this.setState({issues:newIssues});
	}
	createTestIssue(){
		this.createIssue({
				status:'New',owener:'Pieta',created:new Date(),
				title:'Componenet date should be optional',
			});
	}
	render(){
		return(
			<div>
				<h1>Issue Tracker</h1>
				<IssueFilter />
				<hr />
				<IssueTable issues={this.state.issues} />
				<hr />
				<IssueAdd />
			</div>
		);
	}
}
ReactDOM.render(<IssueList />,contentNode);

