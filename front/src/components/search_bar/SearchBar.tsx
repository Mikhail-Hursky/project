import React, {ChangeEvent, useCallback, useState} from 'react';
import {Input} from 'semantic-ui-react';
import {debounce} from 'lodash';
import Logo from '../logo/Logo';
import './SearchBar.scss';

function SearchBar() {
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = useCallback(debounce((e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(false)
  }, 400), [])

  return (
    <header className='searchBar'>
      <Logo/>
      <Input loading={isLoading} onChange={(e) => {
        setIsLoading(true)
        handleChange(e)
      }} className='searchBar__input' placeholder='Search champion...'/>
    </header>
  );
}

export default SearchBar;