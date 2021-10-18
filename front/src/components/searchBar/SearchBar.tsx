import React, {ChangeEvent, useCallback, useState} from 'react';
import {Input} from 'semantic-ui-react';
import {debounce} from 'lodash';
import {useDispatch, useSelector} from "react-redux";
import Logo from '../logo/Logo';
import './SearchBar.scss';
import {addFilter} from "../../redux/cardReducer/cardReducer";
import {IRootReducer} from "../../redux/store";

function SearchBar() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const filter = useSelector((state: IRootReducer) => state.card.filter)
  const setFilter = useCallback(debounce((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addFilter(e.target.value))
    setIsLoading(false)
  }, 400), [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true)
    setFilter(e)
  }

  return (
    <header className='searchBar'>
      <Logo/>
      <Input loading={isLoading} onChange={handleChange} className='searchBar__input' placeholder='Search champion...'/>
    </header>
  );
}

export default SearchBar;