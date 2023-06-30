import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import FichePeinture from './pages/FichePeinture';
// import YMB from './pages/YMB';
import Categories from './pages/Categories';
import Aquarelles from './components/Aquarelles/Aquarelles';
import Huiles from './components/Huiles/Huiles';

function Router(props) {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/FichePeinture/:id" element={<FichePeinture />} />
      <Route path="/Categories" element={<Categories />} />
      <Route path="/Categories/Aquarelles" element={<Aquarelles />} />
      <Route path="/Categories/Huiles" element={<Huiles />} />
      {/* <Route path="/YMB" element={<YMB />} /> */}
    </Routes>
  );
}

export default Router;
