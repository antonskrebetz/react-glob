import { Component, ErrorInfo, ReactNode } from "react";
import ErrorMessage from "../errorMessage/errorMessage";

interface IProps {
    children: ReactNode;
}

interface IState {
    error: boolean;
}

export default class ErrorBoundary extends Component<IProps, IState> {
    public state: IState = {
        error: false
    };

    static getDerivedStateFromError(_: Error): IState {
        return { error: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return this.props.children;
    }
}