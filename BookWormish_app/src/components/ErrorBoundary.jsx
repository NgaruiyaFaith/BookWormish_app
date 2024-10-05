// src/components/ErrorBoundary.jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Lifecycle method that catches errors in any child components
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Method to log the error details (optional)
  componentDidCatch(error, errorInfo) {
    console.error('Error occurred:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-red-100">
          <h1 className="text-red-500 text-xl">Something went wrong.</h1>
          <p className="text-red-400">Please try refreshing the page or contact support if the issue persists.</p>
        </div>
      );
    }

    return this.props.children; // Render the children components if no error
  }
}

export default ErrorBoundary;
