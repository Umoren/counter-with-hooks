import { Routes, Route } from "react-router-dom";
import CounterScreen from "./containers/CounterScreen";
import ErrorScreen from "./containers/ErrorScreen";
import { ErrorBoundary } from "react-error-boundary";

function MyFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

const myErrorHandler = (error, info) => {
  return (
    <div>
      <p>Error: {error.message}</p>
      <p>Info: {info.componentStack}</p>
    </div>
  )
}


function App() {
  return (
    <div>
      <ErrorBoundary
        FallbackComponent={MyFallbackComponent}
        onError={myErrorHandler}
      >
        <Routes>
          <Route path="/" element={<CounterScreen />} />
          <Route path="*" element={<ErrorScreen />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
