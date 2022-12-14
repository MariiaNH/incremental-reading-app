import { FC, useState } from 'react';
import Header from './COMPONENTS/Header';
import Navigation from './COMPONENTS/Navigation';
import Filter from './COMPONENTS/Filter';
import Catalog from './COMPONENTS/Catalog';
import { CatalogItemType } from './TYPES/CatalogItem';
import StarsForBackground from './COMPONENTS/screenBackground';

const App: FC = () => {
  const [items] = useState<CatalogItemType[]>([]);                      
  return (
    <div className="app">
      <StarsForBackground />
      <Header />
      <Navigation />
      <Filter />
      <Catalog items={items} />
      
    </div>
  );
}

export default App;
