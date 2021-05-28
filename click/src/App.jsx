import React, {useState} from 'react';
import DigiClock from './DigiClock';
import Form from './Form';


const App = () => {
    const state = useState();
    const [count, setCount] = useState(0);

    const IncNum = () =>{
        setCount(count+1);
    };

    return(
        <>
        <h1>{count}</h1>
        <button onClick={IncNum}>Click me</button>
        <DigiClock/>
        <Form/>
        </>
    );
}; 

export default App;