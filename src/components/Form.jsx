import React, { useContext, useEffect, useState } from 'react'
import "./Form.css";
import { UserContext } from '../context/UserContext';

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const userCtx = useContext(UserContext);
    const isEdit = userCtx.isEdit;

    useEffect(()=>{
        if(isEdit){
            setName(isEdit.name||"");
            setEmail(isEdit.email||"");
            setPhone(isEdit.phone||"");
        }else{
            resetForm();
        }
    },[isEdit]);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const data = { name, email, phone }
        if(isEdit){
            userCtx.editUser(isEdit.id,data);
        }else{
            userCtx.addUser(data);           
        }
        resetForm();
    }

    const resetForm=()=>{
        setName("");
        setEmail("");
        setPhone("");
    }
    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor='name'>Username:</label>
                    <input id='name' type='text' value={name} onChange={(e) => { setName(e.target.value) }} />

                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input id='email' type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />

                </div>
                <div>
                    <label htmlFor='phone'>Phone:</label>
                    <input id='phone' type='phone' value={phone} onChange={(e) => { setPhone(e.target.value) }} />

                </div>
                <div>
                <button type='submit'>Add User</button>
                </div>
               
            </form>
        </div>
    )
}

export default Form
