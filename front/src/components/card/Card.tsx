import React from 'react';
import {Link} from 'react-router-dom';
import {Image, Popup} from 'semantic-ui-react'
import IChampion from "../../dto/IChampion";
import ISpell from '../../dto/ISpell';
import {CARD_IMG, COLLECTION, PASSIVE_IMG, SPELL_IMG} from "../../Constants";
import './Card.scss'

const abilityKey: string[] = ['Q', 'W', 'E', 'R']

interface Props {
  spells: ISpell[],
  champ: IChampion,
}

const Card = ({spells, champ}: Props) => {
  return (
    <>
      <Link to={`${COLLECTION}/${champ.id}`}>
        <div className='card' style={{
          background: `url(${CARD_IMG}${champ.id}_0.jpg) no-repeat`,
        }}
        >
          <div className="card__name">
            <h2>{champ.name}</h2>
            <h3>{champ.title}</h3>
          </div>
          <div className='card__ability'>
            <Popup
              position='bottom left'
              content={`P: ${champ.passive.name}`}
              trigger={
                <Image className='card__ability-img'
                       circular
                       src={`${PASSIVE_IMG}${champ.passive.image.full}`}
                       alt="passive"/>
              }/>
            {
              spells.map((el, index) => {
                return (
                  <Popup
                    key={`${abilityKey[index]}: ${el.name}`}
                    position={`bottom ${abilityKey[index] === 'R' ? 'right' : 'center'}`}
                    content={`${abilityKey[index]}: ${el.name}`}
                    trigger={
                      <Image className='card__ability-img'
                             circular
                             src={`${SPELL_IMG}${el.image.full}`}
                             alt={abilityKey[index]}/>
                    }/>
                )
              })
            }
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;