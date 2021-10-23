import React, { ChangeEvent, useCallback, useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import debounce from 'lodash/debounce';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../logo/Logo';
import './SearchBar.scss';
import { addFilter } from '../../redux/cardReducer/cardReducer';
import { IRootReducer } from '../../redux/store';
import { logout } from '../../redux/userReducer/userReducer';

function SearchBar() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const name = useSelector((state: IRootReducer) => state.user.name);
  const setFilter = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      dispatch(addFilter(e.target.value));
      setIsLoading(false);
    }, 400),
    []
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setFilter(e);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="searchBar">
      <Logo />
      <Input
        loading={isLoading}
        onChange={handleChange}
        className="searchBar__input"
        placeholder="Search champion..."
      />
      <div className="searchBar__logout">
        {name}
        <Button onClick={handleLogout} color="red">
          Logout
        </Button>
      </div>
    </header>
  );
}

export default SearchBar;
