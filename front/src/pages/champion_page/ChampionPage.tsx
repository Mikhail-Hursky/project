import React from 'react';
import Logo from "../../components/logo/Logo";
import Description from "../../components/description_champion/Description";
import './ChampionPage.scss'

function ChampionPage() {
  return (
    <div className='championPage'>
      <header className='championPage__header'><Logo /></header>
      <Description />
    </div>
  );
}

export default ChampionPage;