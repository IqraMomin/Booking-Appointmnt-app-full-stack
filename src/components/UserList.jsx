import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./UserList.css";

function UserList(){
    const userCtx = useContext(UserContext);
    const deleteUserHandler = (id)=>{
        userCtx.deleteUser(id);
    }

    const editUserHandler = (user)=>{
        userCtx.editUserHandler(user);
    }

    return (
        <ul>
            {userCtx.users.map(ele=>{
                return  <li key={ele.id}>
                    <p>{ele.name}</p>
                    <button onClick={()=>{editUserHandler(ele)}}>Edit</button>
                    <button onClick={()=>{deleteUserHandler(ele.id)}}>Delete</button>
                    </li>
            })}
        </ul>
    )
}

export default UserList;