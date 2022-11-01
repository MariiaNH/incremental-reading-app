import { FC } from 'react';
import { CatalogItemType } from '../TYPES/CatalogItem';
// type Props = {
//   item: CatalogItemType;
// };

const CatalogItem = () => {
  return ( 
    <div className="card catalog__card">
      <img
        className="card__product-image"
        src="./0107.jpg"
        alt="imac"
      />

      <div className="card__discription">
        Моноблок APPLE A1419 iMac 27&#34; Retina 5K (MNED2UA/A)
      </div>

      <div className="card__code">
        Код товара: 195434
      </div>

      <div className="card__price">
        <div className="card__price-title">
          Цена:
        </div>

        <div className="card__price-amount">
          69 999 грн
        </div>
      </div>

      <a
        className="card__boughtLink"
        href="/"
      >
        купить
      </a>
    </div>
  )};

export default CatalogItem;