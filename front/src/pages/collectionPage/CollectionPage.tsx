import React, {useState} from 'react';
import {Pagination} from "semantic-ui-react";
import Card from '../../components/card/Card';
import SearchBar from "../../components/searchBar/SearchBar";
import {champions} from "../../mock/Champions";
import './Collection.scss'

function CollectionPage() {
  const [championCards, setChampionCards] = useState(champions)
  return (
    <div className='containerCollection'>
      <SearchBar/>
      <div className='cardsBlock'>
        {championCards.map(el =>
          <Card
            key={el.id}
            spells={el.spells}
            identifier={el.id}
            name={el.name}
            tittle={el.title}
            passive={el.passive}
          />)}
      </div>
      <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={10}
      />
    </div>
  );
}

export default CollectionPage;