import { BigDaddyProvider } from './Provider/BigDaddyMinterContext';
import "./flow/config";
import { HashRouter, Routes, Route } from 'react-router-dom';
import BigDaddyMinterComponent from './Components/BigDaddyMinterComponent';

function App() {
  return (
    <HashRouter basename="/" >
      <BigDaddyProvider>
        <Routes>
          <Route path="/" element={<BigDaddyMinterComponent />} />
        </Routes>
      </BigDaddyProvider>
    </HashRouter>
  );
}

export default App;
