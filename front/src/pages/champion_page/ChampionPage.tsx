import React from 'react';
import {useHistory} from "react-router-dom";
import Logo from "../../components/logo/Logo";
import Description from "../../components/description_champion/Description";
import {ChampionsFull} from "../../mock/Champions";
import Slider from "../../components/slider/Slider";
import './ChampionPage.scss'

function ChampionPage() {
  const history = useHistory()
  const champ = ChampionsFull.filter(el => el.id === history.location.pathname.split('/')[2])[0]
  return (
    <div className='championPage'>
      <header className='championPage__header'><Logo/></header>
      <div className='championPage__info'>
        <Description
          tittle={champ.title}
          identifier={champ.id}
          name={champ.name}
          passive={champ.passive}
          spells={champ.spells}
          lore={champ.lore}
        />
        <Slider skins={champ.skins} name={champ.name}/>
      </div>
    </div>
  );
}

export default ChampionPage;