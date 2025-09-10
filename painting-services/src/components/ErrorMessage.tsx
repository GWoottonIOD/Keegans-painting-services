import type { FallbackProps } from 'react-error-boundary';

export default function ErrorMessage(props: FallbackProps) {
  const { error } = props;
  const resetErrorBoundary = () => {
    // You'll need to implement this function to reset the error boundary
  };

  return (
    <div className="ErrorMessage">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again?</button>
    </div>
  );
}