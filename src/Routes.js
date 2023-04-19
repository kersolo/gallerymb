import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import FichePeinture from './pages/FichePeinture';

function Router(props) {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/FichePeinture/:id" element={<FichePeinture />} />
    </Routes>
  );
}

export default Router;
