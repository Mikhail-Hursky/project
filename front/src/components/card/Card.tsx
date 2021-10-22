import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Popup } from 'semantic-ui-react';
import ISpell from '../../dto/ISpell';
import IPassive from '../../dto/IPassive';
import { CARD_IMG, COLLECTION, PASSIVE_IMG, SPELL_IMG } from '../../Constants';
import './Card.scss';

const abilityKey: string[] = ['Q', 'W', 'E', 'R'];

interface Props {
  spells: ISpell[];
  identifier: string;
  name: string;
  tittle: string;
  passive: IPassive;
}

const Card = ({ spells, identifier, name, tittle, passive }: Props) => {
  return (
    <>
      <Link to={`${COLLECTION}/${identifier}`}>
        <div
          className="card"
          style={{
            background: `url(${CARD_IMG}${identifier}_0.jpg) no-repeat`,
          }}
        >
          <div className="card__name">
            <h2>{name}</h2>
            <h3>{tittle}</h3>
          </div>
          <div className="card__ability">
            <Popup
              position="bottom left"
              content={`P: ${passive.name}`}
              trigger={
                <Image
                  className="card__ability-img"
                  circular
                  src={`${PASSIVE_IMG}${passive.image.full}`}
                  alt="passive"
                />
              }
            />
            {spells.map((el, index) => {
              return (
                <Popup
                  key={`${abilityKey[index]}: ${el.name}`}
                  position={`bottom ${
                    abilityKey[index] === 'R' ? 'right' : 'center'
                  }`}
                  content={`${abilityKey[index]}: ${el.name}`}
                  trigger={
                    <Image
                      className="card__ability-img"
                      circular
                      src={`${SPELL_IMG}${el.image.full}`}
                      alt={abilityKey[index]}
                    />
                  }
                />
              );
            })}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
