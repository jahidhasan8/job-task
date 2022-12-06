import React, { createContext, useState } from 'react';


export const SignupContext = createContext()
const SignupProvider = ({ children }) => {

    const [signUp, setSignUp] = useState({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        password: "",
    })

    const signupInfo = {
        signUp,
        setSignUp
    }

    return (
        <SignupContext.Provider value={signupInfo}>
            {children}
        </SignupContext.Provider>
    );
};

export default SignupProvider;