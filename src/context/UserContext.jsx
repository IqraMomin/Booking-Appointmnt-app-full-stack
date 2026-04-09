import axios from "axios";
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children})=>{
    const [users,setUsers] = useState([]);
    const [isEdit,setIsedit] = useState(null);

    const editUserHandler = (user)=>{
        setIsedit(user);
    }

    const addUser = async (user)=>{
        try{
            const res= await axios.post('http://localhost:3000/users/',user);
            const id = res.data.id;
            setUsers(prev=>[...prev,{...user,id}]);
        }
        catch(err){
            console.log(err);
        }
        
    }

    const deleteUser =async (id)=>{
        try{
            await axios.delete(`http://localhost:3000/users/${id}`)
            setUsers(prev=>prev.filter(ele=>ele.id!==id));
        }
        catch(err){
            console.log(err);
        }
    }
    const editUser = async(id,user)=>{
        await axios.put(`http://localhost:3000/users/${id}`,user);
        const newList = users.filter(ele=>ele.id!==id);
        setUsers([...newList,{...user,id}]);
    }

    const getUsers = async()=>{
        const res = await axios.get(`http://localhost:3000/users/`);
        setUsers(res.data);
    }

    return (
        <UserContext.Provider value={{users,addUser,deleteUser,isEdit,editUserHandler,editUser,getUsers}}>
            {children}
        </UserContext.Provider>
    )
}