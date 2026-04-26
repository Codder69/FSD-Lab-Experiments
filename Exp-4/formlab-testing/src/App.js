import Button from "./components/Button";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";

function App(){

return(
<div style={{
minHeight:"100vh",
background:"linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
color:"white",
padding:"40px",
fontFamily:"Arial",
textAlign:"center"
}}>

<h1 style={{
fontSize:"3rem",
textShadow:"0 0 15px cyan"
}}>
⚡ FormLab X Testing Arena
</h1>

<div style={{
background:"rgba(255,255,255,0.1)",
padding:"30px",
borderRadius:"20px",
backdropFilter:"blur(10px)",
maxWidth:"700px",
margin:"auto"
}}>

<Button/>

<hr/>

<Form/>

<hr/>

<Dashboard status="loaded"/>

</div>

</div>
);

}

export default App;