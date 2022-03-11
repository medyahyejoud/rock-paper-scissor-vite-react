import type { ErrorInfo, ReactNode } from "react";
import React, { Component } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  error: Error | null;
  info: ErrorInfo | null;
}
class ErrorBoundary extends Component<Props, State> {
  state = {
    error: null,
    info: null,
  };

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.setState({ error, info });
  }

  render(): ReactNode {
    const { error } = this.state;
    if (error) {
      return <ErrorBoundaryFallbackComponent />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

const ErrorBoundaryFallbackComponent = () => (
  <div className="w-full h-full flex justify-center items-center">
    <div className="p-10 border-2 border-dark-500 border-solid rounded-md text-2xl text-dark-500">
      Something Error Ooccurring
      <span role="img" aria-label="face-emoji">
        😞
      </span>
    </div>
  </div>
);
