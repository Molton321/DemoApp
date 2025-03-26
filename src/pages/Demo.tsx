import React, { useEffect, useState } from 'react';

const Demo: React.FC = () => {
    let [name, setName]  = useState("Molton");
    let [n, setn] = useState(0);

    const changeName = (event:any) => {
    setName(event.target.value);
    }

    const clickMe = () => {
        setn(n+1);

    }
    
    useEffect(() => {
        console.log("Component did mount");
        return () => {
            console.log("Component will unmount");
        }
    },[]); // [] is used to run only once
    return (
        <div>
            <div>Numero de Intentos : {n}</div>
        <h1>Hello World {name}</h1>
        <input type="text" onChange={changeName} />
        <button onClick={clickMe}>Click Me</button>
        </div>

    );
};
export default Demo;