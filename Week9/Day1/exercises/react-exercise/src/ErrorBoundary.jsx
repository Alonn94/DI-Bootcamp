import React from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
        error: null
        };
    }
componentDidCatch(error, errorInfo) {
    this.setState({ error :true });
    console.log(error);
};

render() {
    if (this.state.error) {
        return (
            <div>
                <h2>Error on {this.props.fallback}</h2>

{/* style given from instructions */}

                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo?.componentStack}
                </details>



            </div>
        );
    }

    return this.props.children;
}
};

export default ErrorBoundary 

