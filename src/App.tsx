import { Routes, Route } from 'react-router-dom';
import Home from './pages/home-page/Home';
import SalesContractWorkflow from './pages/SalesContractWorkflow';
import ESign from './pages/esign/ESign';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sales-contract-workflow" element={<SalesContractWorkflow />} />
            <Route path="/esign-platform" element={<ESign />} />
        </Routes>
    );
}
