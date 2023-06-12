import React, { useState } from 'react';

const AddTaskInputs = () => {

    const [name,setName] = useState("")
    const [surName,setSurName] = useState("")
    const [email,setEmail] = useState("")
    const [position,setPosition] = useState("")
    return (
        
        <div>
            <div><input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setName(e.target.value)
            }} type="text" placeholder='Name' /></div>
            <div><input onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setSurName(e.target.value)
            }} value={surName} type="text" placeholder="surName"/></div>
            <div><input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setEmail(e.target.value)
            }} type="text" placeholder="email"/></div>
            <div><input value={position} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setPosition(e.target.value)
            }} type="text" placeholder="position"/></div>
            <div><button>save</button><button>cancel</button></div>
        </div>
    );
};

export default AddTaskInputs;