import { useEffect, useState } from "react";

function App() {

const [joke,setJoke]=useState("Loading...");

const getJoke = async () => {

try{
const res = await fetch(
"https://official-joke-api.appspot.com/random_joke"
);

const data = await res.json();

setJoke(
data.setup + " 😂 " + data.punchline
);

}
catch{
setJoke("Offline mode active.");
}

};

useEffect(()=>{
getJoke();
},[]);

return(
<div style={{textAlign:"center",marginTop:"100px"}}>

<h1>MemeVault PWA 🚀</h1>

<p>{joke}</p>

<button onClick={getJoke}>
New Joke
</button>

</div>
);

}

export default App;