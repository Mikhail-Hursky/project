import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Spin} from "antd";
import Logo from "../../components/logo/Logo";
import Description from "../../components/descriptionChampion/Description";
import Slider from "../../components/slider/Slider";
import './ChampionPage.scss'
import {IRootReducer} from "../../redux/store";
import {fetchChampion} from "../../redux/championReducer/championReducer";

function ChampionPage() {
  const history = useHistory()
  const dispatch = useDispatch()
  const champ = useSelector((state: IRootReducer) => state.champion.champion)

  // @ts-ignore
  useEffect(async () => {
    dispatch(fetchChampion(history.location.pathname.split('/')[2]))
  }, [])

  return (
    <div className='championPage'>
      <header className='championPage__header'><Logo/></header>
      {champ ? (
        <>
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
        </>
      ) : (<Spin style={{flex: 1}} size="large"/>)
      }
    </div>
  );
}

export default ChampionPage;