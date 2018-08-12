import React, {Fragment} from 'react';
import Image from './Image';
import utils from '../utils/';
import userLogo from '../assets/images/logged_user.jpeg';
import defaultLogo from  '../assets/images/default_user.png';

const CardHeader = ({appearance}) => {
  const imgSrc = appearance['bg-img'] || appearance['bg-logo'] || defaultLogo;
  return (
    <header className="yoti-card__header" style={{backgroundColor: appearance['bg-color']}}>
      <Image imgClassnames="yoti-card__header-image" imgSrc={imgSrc} />
    </header>
  );
} 

const CardImageShare = ({attributes}) => {
  const selfie = attributes.find(item => item.selfie);
  const imgClassnames = 'img-circle icon-user_selfie_ph_medium';

  return selfie ?
    <Image imgClassnames={imgClassnames} imgSrc={selfie.selfie} /> :
    <Image imgClassnames={imgClassnames} imgSrc={defaultLogo} />
}

const CardImage = cardData => cardData.type === 'application' ?
  <Image imgClassnames="img-circle icon-user_selfie_ph_medium" imgSrc={userLogo} /> :
  <CardImageShare {...cardData.transaction} />

const cardTimeStamp = timeStamp => `at ${utils.getHoursFromUnix(timeStamp)} on ${utils.getDateFromUnix(timeStamp)}`;

const CardTitle = cardData => cardData.type === 'application' ?
  <Fragment>
    <h3>Simple Yoti SDK App</h3>
    <p>
      viewed this information about you <br />
      {cardTimeStamp(cardData.transaction['unix-timestamp'])}
    </p>
  </Fragment> :
  <h3>Yoti Shared</h3>;

const CardAttributes = cardData => {
  const {attributes} = cardData.transaction;
  const attrMap = {
    'given-names': 'Given Name(s)',
    'mobile-number': 'Mobile Number',
    'gender': 'Gender',
    'selfie': 'Picture',
    'email-address': 'Email Address',
    'age': 'Age',
    'adress': 'Adress'
  };
  
  return attributes.map(attr => {
    const key = Object.keys(attr)[0];
    return (
      <div key={key}>
        <h6 className="yoti-card__main-attributes-title">
          {attrMap[key]}
        </h6>
        <p className="yoti-card__main-attributes-text">
          {key === 'selfie' ? 'Yes' : attr[key]}
        </p>
      </div>
    )
  })
}

const Card = cardData => {
  return (
    <section className="yoti-card">
      {
        cardData.type === 'application' && <CardHeader {...cardData.application} />
      }
      <main className="yoti-card__main">
        <div className="yoti-card__main-image">
          <div className="yoti-card__main-image-user">
            { <CardImage {...cardData} /> }
            <div className="icon-logo_circle"></div>
          </div>
          <div className="icon-receipt_confirmed"></div>
        </div>
        <div className="yoti-card__main-info">
          { <CardTitle {...cardData} /> }
        </div>
        <section className="yoti-card__main-attributes">
          {
            <CardAttributes {...cardData} />        
          }
        </section>
      </main>
    </section>
  )
}

export default Card;