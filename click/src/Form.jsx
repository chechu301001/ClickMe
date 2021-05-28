import React, {useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Form = () =>{
    const [name, setName] = useState("");

    const [fullName, setFullName] = useState();

    const inputEvent = (event) => {
        setName(event.target.value);
    };

    const onSubmit = () => {
        setFullName(name);
    };
    return(
        <>
            <h1>Hello {fullName}</h1>  
            <input type='text' placeholder='Enter Your Name'
                onChange={inputEvent}
                value={name}
            />
            <button onClick={onSubmit}>Submit ✔</button>

        </>
    );
};

export default Form;