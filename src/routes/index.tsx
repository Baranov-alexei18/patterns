import { lazy } from 'react';
import { Routes, Route } from 'react-router';

const Home = lazy(() => import('../pages/home'));
const About = lazy(() => import('../pages/about'));

const SingletonPage = lazy(() => import('../pages/singleton'));
const AbstractFactoryPage = lazy(() => import('../pages/abstract-factory'));
const AdapterPage = lazy(() => import('../pages/adapter'));
const BridgePage = lazy(() => import('../pages/bridge'));
const BuilderPage = lazy(() => import('../pages/builder'));
const CompositePage = lazy(() => import('../pages/composite'));
const PrototypePage = lazy(() => import('../pages/prototype'));
const FactoryPage = lazy(() => import('../pages/factory'));
const DecoratorPage = lazy(() => import('../pages/decorator'));
const FacadePage = lazy(() => import('../pages/facade'));
const FlyweightPage = lazy(() => import('../pages/flyweight'));
const ProxyPage = lazy(() => import('../pages/proxy'));
const ObserverPage = lazy(() => import('../pages/observer'));
const StrategyPage = lazy(() => import('../pages/strategy'));
const StatePage = lazy(() => import('../pages/state'));

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
      <Route path="/patterns/composite" element={<CompositePage />} />
      <Route path="/patterns/decorator" element={<DecoratorPage />} />
      <Route path="/patterns/facade" element={<FacadePage />} />
      <Route path="/patterns/flyweight" element={<FlyweightPage />} />
      <Route path="/patterns/proxy" element={<ProxyPage />} />

      <Route path="/patterns/observer" element={<ObserverPage />} />
      <Route path="/patterns/strategy" element={<StrategyPage />} />
      <Route path="/patterns/state" element={<StatePage />} />
    </Routes>
  );
};

export default RoutesList;
