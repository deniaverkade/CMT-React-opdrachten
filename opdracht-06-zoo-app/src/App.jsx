import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animals/:animalId" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;