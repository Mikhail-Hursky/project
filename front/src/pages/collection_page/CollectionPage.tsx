import React, {useState} from 'react';
import Card from '../../components/card/Card';
import SearchBar from "../../components/search_bar/SearchBar";
import Champions from "../../mock/Champions";
import './Collection.scss'
import {Pagination} from "semantic-ui-react";

function CollectionPage() {
  const [arr, setArr] = useState(Champions);
  return (
    <div className='containerCollection'>
      <SearchBar/>
      <div className='cardsBlock'>
        {arr.map(el => <Card key={el.id} spells={el.spells} champ={el}/>)}
      </div>
      <Pagination defaultActivePage={1} totalPages={10} />
    </div>
  );
}

export default CollectionPage;