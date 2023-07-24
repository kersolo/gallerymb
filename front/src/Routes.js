import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PaintInfos from './pages/PaintInfos';
// import YMB from './pages/YMB';
import Categories from './pages/Categories';
import Watercolors from './components/Watercolors/Watercolors';
import OilPainting from './components/OilPainting/OilPainting';
import YMB from './pages/YMB';

function Router(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/PaintInfos/:id" element={<PaintInfos />} />
      <Route path="/Categories" element={<Categories />} />
      <Route path="/Categories/Watercolors" element={<Watercolors />} />
      <Route path="/Categories/OilPainting" element={<OilPainting />} />
      <Route path="/YMB" element={<YMB />} />
    </Routes>
  );
}

export default Router;
