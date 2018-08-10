import React from 'react';
import Image from './Image';
import userLogo from '../assets/images/logged_user.jpeg';
import defaultLogo from  '../assets/images/default_user.png';

const CardHeader = ({appearance}) => <header style={{backgroundColor: appearance['bg-color']}}>
  <Image imgSrc={appearance['bg-img']} />
</header>

const CardImageShare = ({attributes}) => {
  const selfie = attributes.find(item => item.selfie);

  return selfie ?
    <Image imgSrc={selfie} /> :
    <Image imgSrc={defaultLogo} />
}

const CardImage = (cardData) => cardData.type === 'application' ?
  <Image imgSrc={userLogo} /> :
  <CardImageShare {...cardData.transaction} />

const Card = (cardData) => {
  return (
    <section>
      {
        cardData.type === 'application' && <CardHeader {...cardData.application} />
      }
      <main>
      {
        CardImage(cardData)
      }
      </main>
    </section>
  )
}

export default Card;