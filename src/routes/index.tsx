import { Routes, Route } from 'react-router';

import About from '../pages/about';
import AbstractFactoryPage from '../pages/abstract-factory';
import FactoryPage from '../pages/factory';
import Home from '../pages/home';
import SingletonPage from '../pages/singleton';

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/patterns/singleton" element={<SingletonPage />} />
      <Route path="/patterns/factory" element={<FactoryPage />} />
      <Route path="/patterns/abstract-factory" element={<AbstractFactoryPage />} />
    </Routes>
  );
};

export default RoutesList;
