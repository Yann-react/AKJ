import React, { useState } from "react";

export const UserContext = React.createContext(null)

const {Provider} = UserContext

const UserProvider = ({children}) =>{
    const [user,setUser] = useState(false)
    return(
        <Provider value={[user,setUser]}>
            {children}
        </Provider>
    )
}

UserProvider.context = UserContext

export default UserProvider