import { FC } from 'react';
import { CatalogItemType } from '../TYPES/CatalogItem';
import CatalogItem from './CatalogItem';

type Props = {
  items: CatalogItemType[];
};
const Catalog: FC<Props> = ({ items }) =>  {
  return (
    <div className="catalog">
      {/* {items.map(item => (
      <CatalogItem
        key={item.imdbId}
        item={item}
      />
    ))} */}
    <CatalogItem />
    <CatalogItem />
    <CatalogItem />
    <CatalogItem />
    <CatalogItem />
    <CatalogItem />
    <CatalogItem />
    <CatalogItem />
    <CatalogItem />
    <CatalogItem />
    <CatalogItem />

    </div>
  );
};

export default Catalog;