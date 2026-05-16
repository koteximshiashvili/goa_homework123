import React from 'react';

class ErrorBoundary1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("error occured:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <button onClick={() => window.location.reload()}>Reload</button>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary1;
