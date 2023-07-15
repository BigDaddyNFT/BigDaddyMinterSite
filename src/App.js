import { BigDaddyProvider } from './Provider/BigDaddyMinterContext';
import "./flow/config";
import { HashRouter, Routes, Route } from 'react-router-dom';
import BigDaddyMinterComponent from './Components/BigDaddyMinterComponent';
import BigDaddyMinterNavBar from './Components/BigDaddyMinterNavBar';

function App() {
  return (
    <HashRouter basename="/">
      <BigDaddyProvider>
        <div className="BigDaddyMarketplaceContainer">
        <BigDaddyMinterNavBar />
        <Routes>
          <Route path="/" element={<BigDaddyMinterComponent />} />
        </Routes>
        </div>
      </BigDaddyProvider>
    </HashRouter>
  );
}

export default App;
