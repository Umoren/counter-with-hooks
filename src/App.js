import { Routes, Route } from "react-router-dom";
import CounterScreen from "./containers/CounterScreen";
import ErrorScreen from "./containers/ErrorScreen";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CounterScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </div>
  );
}

export default App;
