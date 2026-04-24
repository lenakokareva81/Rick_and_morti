import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ErrorBoundaryProps{
   props:React.ReactNode
}

class ErrorBoundary extends Component {

    constructor(props: ErrorBoundaryProps) {
        super(props)

        this.state = {
            hasError: false
        }



    }

    static getDerivedStateFromError(error) {
        console.log('error', error)
        return {
            hasError: true
        }

    }


    componentDidCatch(error, errorInfo) {
        console.log('error', error)
        console.log('errorInfo', errorInfo)
    }


    render() {
        if (this.state.hasError) {
            return <>
                <h4>что то пошло не так</h4>
                <Link to='/' className="cmn-btn mt-4">На главную</Link>
            </>
        }
        return this.props.children;
    }
}

export default ErrorBoundary