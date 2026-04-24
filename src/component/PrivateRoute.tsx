import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import React, { ReactElement, ReactNode } from "react"

interface PrivateRouteProps{
    children:React.ReactNode
}

export function PrivateRoute({ children }: PrivateRouteProps) {

    const auth = useAuth()

    if (auth.user === null) {
        return <Navigate to='/login' />
    }

    return children
}