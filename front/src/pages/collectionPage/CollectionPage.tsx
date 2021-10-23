import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Spin } from 'antd';
import Card from '../../components/card/Card';
import SearchBar from '../../components/searchBar/SearchBar';
import { IRootReducer } from '../../redux/store';
import { fetchCardsData } from '../../redux/cardReducer/cardReducer';
import './Collection.scss';
import IChampion from '../../dto/IChampion';
import { getUserApi } from '../../api/api';

function CollectionPage() {
  const dispatch = useDispatch();
  const cardBlock = useRef<HTMLHeadingElement>(null);
  const { cards, filter } = useSelector((state: IRootReducer) => state.card);
  const [championCards, setChampionCards] = useState<IChampion[]>([]);
  const [pageSetting, setPageSetting] = useState({
    page: 1,
    pageSize: 24
  });

  useEffect(() => {
    getUserApi().then(() => dispatch(fetchCardsData()));
  }, []);

  useEffect(() => {
    setChampionCards(cards);
  }, [cards]);

  useEffect(() => {
    if (!filter) setChampionCards(cards);
    else {
      const regex = new RegExp(filter, 'i');
      setChampionCards(cards.filter(el => el.name.match(regex)));
      setPageSetting(prev => ({ ...prev, page: 1 }));
    }
  }, [filter]);

  const onShowSizeChange = (current: number, pageSize: number) => {
    setPageSetting({ page: current, pageSize });
  };

  const onChange = (pageNumber: number) => {
    cardBlock.current?.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    setPageSetting(prev => ({ ...prev, page: pageNumber }));
  };

  return (
    <div className="containerCollection">
      <SearchBar />
      {!cards.length ? (
        <Spin style={{ flex: 1 }} size="large" />
      ) : (
        <>
          <div ref={cardBlock} className="cardsBlock">
            {championCards
              .slice(
                (pageSetting.page - 1) * pageSetting.pageSize,
                pageSetting.page * pageSetting.pageSize
              )
              .map(el => (
                <Card
                  key={el.id}
                  spells={el.spells}
                  identifier={el.id}
                  name={el.name}
                  tittle={el.title}
                  passive={el.passive}
                />
              ))}
          </div>
          <div className="pagination">
            <Pagination
              current={pageSetting.page}
              onChange={onChange}
              responsive={true}
              defaultCurrent={1}
              onShowSizeChange={onShowSizeChange}
              defaultPageSize={pageSetting.pageSize}
              pageSizeOptions={['24', '48', '60', '90']}
              total={championCards.length}
              showSizeChanger
            />
          </div>
        </>
      )}
    </div>
  );
}

export default CollectionPage;
