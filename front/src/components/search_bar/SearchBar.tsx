import React, {ChangeEvent, useCallback, useState} from 'react';
import {Input} from 'semantic-ui-react';
import {debounce} from 'lodash';
import Logo from '../logo/Logo';
import './SearchBar.scss';

function SearchBar() {
  const [isLoading, setIsLoading] = useState(false);
  const sendRequest = useCallback(debounce((e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(false)
  }, 400), [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true)
    sendRequest(e)
  }

  return (
    <header className='searchBar'>
      <Logo/>
      <Input loading={isLoading} onChange={handleChange} className='searchBar__input' placeholder='Search champion...'/>
    </header>
  );
}

export default SearchBar;