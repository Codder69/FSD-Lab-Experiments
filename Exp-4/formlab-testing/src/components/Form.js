import React,{useState} from "react";

function Form(){

const [name,setName]=useState("");
const [message,setMessage]=useState("");

const handleSubmit=(e)=>{
e.preventDefault();

if(name===""){
setMessage("Name required");
}
else{
setMessage("Form submitted successfully");
}
};

return(
<div>

<form onSubmit={handleSubmit}>

<input
placeholder="Enter name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<button type="submit">
Submit
</button>

</form>

<p>{message}</p>

</div>
);

}

export default Form;