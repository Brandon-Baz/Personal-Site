import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
        errorInfo: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error, errorInfo: null };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div style={{ padding: '20px', border: '1px solid #f5c6cb', borderRadius: '4px', backgroundColor: '#f8d7da', color: '#721c24' }}>
                    <h1>Something went wrong</h1>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        <summary>Error Details</summary>
                        <p>
                            <strong>Error:</strong> {this.state.error && this.state.error.toString()}
                        </p>
                        <p>
                            <strong>Stack Trace:</strong>
                        </p>
                        <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;