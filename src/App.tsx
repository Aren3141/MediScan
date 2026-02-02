import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SymptomChecker } from './pages/SymptomChecker';
import { Tech } from './pages/Tech';
import { ScrollToTop } from './components/ScrollToTop';
import { DiagnosisProvider } from './context/DiagnosisContext';
import { DiagnosisModal } from './components/DiagnosisModal';

function App() {
  return (
    <DiagnosisProvider>
      <Router>
        <ScrollToTop />
        <DiagnosisModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checker" element={<SymptomChecker />} />
          <Route path="/tech" element={<Tech />} />
        </Routes>
      </Router>
    </DiagnosisProvider>
  );
}

export default App;
