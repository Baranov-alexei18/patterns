import { Routes, Route } from 'react-router';

import About from '../pages/about';
import Home from '../pages/home';
import SingletonPage from '../pages/singleton';

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/patterns/singleton" element={<SingletonPage />} />
    </Routes>
  );
};

export default RoutesList;
