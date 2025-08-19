import { Routes, Route } from 'react-router';

import About from '../pages/about';
import Home from '../pages/home';

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default RoutesList;
