import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {hasError:false};
    }

componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.log(error);
}

render() {
    if (this.state.hasError) {
        return (
            <>
                <h2>Error on {this.props.fallback}</h2>
            </>
        );
    }
    return this.props.children;

}};

export default ErrorBoundary

