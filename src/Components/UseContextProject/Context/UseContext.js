import React, { useReducer} from "react";
import { initialValue, reduce } from "../Reduce/Reducer";



export const UseContext = React.createContext();

const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, initialValue)

   const value = {
    users : state.userData,
    addUser: (newUser)=>{
      dispatch({type:"ADD_USER",payload:newUser})
    },
    removeUser:(id)=>{
      dispatch({type:"REMOVE_USER",payload: id})
    } 
   }

  return (
    <UseContext.Provider value={value}>
      {children}
    </UseContext.Provider>
  );
};

export default UsersProvider;
