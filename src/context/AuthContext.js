import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../Firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


    function register(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout(){
        auth.signOut()
    }
    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)

        })
        return unsubscribe
    },[])

    const value ={
        currentUser,
        register,
        login,
        logout,
        resetPassword
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
