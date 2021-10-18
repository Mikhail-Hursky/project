import React from 'react';
import {Image} from "semantic-ui-react";
import {CARD_IMG, PASSIVE_IMG, SPELL_IMG} from "../../Constants";
import IPassive from "../../dto/IPassive";
import ISpell from "../../dto/ISpell";
import './Description.scss'

interface Props {
  identifier: string,
  tittle: string,
  name: string,
  passive: IPassive,
  spells: ISpell[],
  lore: string
}

const Description = ({ name, lore, passive, spells, identifier, tittle }: Props) => {
  return (
    <>
      <div className='description'>
        <div className='description__image'>
          <h2>{name}<br/>{tittle}</h2>
          <Image src={`${CARD_IMG}${identifier}_0.jpg`} alt=""/>
        </div>
        <div className="description__ability">
          <div className="description__ability--information">
            <Image
              circular
              src={`${PASSIVE_IMG}${passive.image.full}`}
              alt="passive"
            />
            <div className='info'>
              <h3>{passive.name}</h3>
              <p>{passive.description}</p>
            </div>
          </div>
          {
            spells.map(el =>
              <div key={el.id} className="description__ability--information">
                <Image
                  key={el.id}
                  circular
                  src={`${SPELL_IMG}${el.image.full}`}
                  alt={el.name}
                />
                <div className='info'>
                  <h3>{el.name}</h3>
                  {el.cooldownBurn && <p>{el.cooldownBurn + " sec"}</p>}
                  <p>{el.description}</p>
                </div>
              </div>
            )
          }

        </div>
      </div>
      <div className='lore'>
        <h2>Lore</h2>
        <p>{lore}</p>
      </div>
    </>

  );
}

export default Description;