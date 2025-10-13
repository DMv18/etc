import React from 'react';
import '@Errors/Errors.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error("Error capturado por ErrorBoundary:", error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error capturado por ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="ErrorBoundary">
          <img
            id="error-ice-image"
            src="https://cdn-icons-png.flaticon.com/512/5093/5093492.png"
            alt="Error"
          />
          <h1>Oops, algo salió mal</h1>
          <p>Intenta recargar la página o contacta soporte</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;