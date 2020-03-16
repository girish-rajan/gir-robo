import React, { Component } from 'react';

class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state={
            haserror: false
        }
    };
    componentDidCatch(error, info){
        this.setState({haserror: true});
    }
    render(){
        if (this.state.haserror){
            return <h1>Opps that is not good</h1>
        }
        return this.props.children;
    }

}

export default ErrorBoundary;