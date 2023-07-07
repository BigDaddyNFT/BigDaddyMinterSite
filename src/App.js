import { BigDaddyProvider } from './Provider/BigDaddyMinterContext';
import "./flow/config";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BigDaddyMinterComponent from './Components/BigDaddyMinterComponent';

function App() {
  return (
    <Router>
      <BigDaddyProvider>
        <Routes>
          <Route path="/" element={<BigDaddyMinterComponent />} />
        </Routes>
      </BigDaddyProvider>
    </Router>
  );
}

export default App;
