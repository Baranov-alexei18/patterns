import { Routes, Route } from 'react-router';

import About from '../pages/about';
import AbstractFactoryPage from '../pages/abstract-factory';
import AdapterPage from '../pages/adapter';
import BridgePage from '../pages/bridge';
import BuilderPage from '../pages/builder';
import FactoryPage from '../pages/factory';
import Home from '../pages/home';
import PrototypePage from '../pages/prototype';
import SingletonPage from '../pages/singleton';

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/patterns/singleton" element={<SingletonPage />} />
      <Route path="/patterns/factory" element={<FactoryPage />} />
      <Route path="/patterns/abstract-factory" element={<AbstractFactoryPage />} />
      <Route path="/patterns/builder" element={<BuilderPage />} />
      <Route path="/patterns/prototype" element={<PrototypePage />} />

      <Route path="/patterns/adapter" element={<AdapterPage />} />
      <Route path="/patterns/bridge" element={<BridgePage />} />
    </Routes>
  );
};

export default RoutesList;
