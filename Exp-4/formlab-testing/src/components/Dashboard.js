
function Dashboard({status}){

if(status==="loading")
return <h2>Loading...</h2>;

if(status==="empty")
return <h2>No Data</h2>;

if(status==="error")
return <h2>Error Found</h2>;

return(
<div>
<h2>Dashboard Loaded</h2>
<ul>
<li>User 1</li>
<li>User 2</li>
</ul>
</div>
);

}

export default Dashboard;