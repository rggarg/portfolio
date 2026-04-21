import { Routes, Route } from 'react-router-dom';
import Home from './pages/home-page/Home';
import SalesContractWorkflow from './pages/SalesContractWorkflow';
import ESign from './pages/esign/ESign';
import InvoicingWorkflow from './pages/invoicing/InvoicingWorkflow';
import TipTap from './pages/tiptap/TipTap';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sales-contract-workflow" element={<SalesContractWorkflow />} />
            <Route path="/esign-platform" element={<ESign />} />
            <Route path="/invoicing-workflow" element={<InvoicingWorkflow />} />
            <Route path="/collaborative-editor" element={<TipTap />} />
        </Routes>
    );
}
