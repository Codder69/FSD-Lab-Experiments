import React, {useEffect, useState} from "react";
import "./App.css";

function App() {

const [posts,setPosts]=useState([]);
const [msg,setMsg]=useState("");

useEffect(()=>{
fetch("http://localhost:8080/auth/welcome")
.then(res=>res.text())
.then(data=>setMsg(data))
.catch(()=>setMsg("Backend connection failed"));
},[]);

useEffect(()=>{
setPosts([
{id:1,title:"Post One"},
{id:2,title:"Post Two"}
]);
},[]);

return (
<div style={{padding:"30px"}}>
<h1>React + Spring Integration</h1>

<h2>Backend Message:</h2>
<p>{msg}</p>

<h2>Public GET Table</h2>

<table border="1" cellPadding="10">
<thead>
<tr>
<th>ID</th>
<th>Title</th>
</tr>
</thead>

<tbody>
{posts.map(p=>(
<tr key={p.id}>
<td>{p.id}</td>
<td>{p.title}</td>
</tr>
))}
</tbody>

</table>

<h2>Form Submission Demo</h2>

<form onSubmit={(e=>{
e.preventDefault();
alert("Product submitted successfully (201)");
})}>
<input placeholder="Product Name"/>
<button type="submit">
Submit
</button>
</form>

</div>
);

}

export default App;