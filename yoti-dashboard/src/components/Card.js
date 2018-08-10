import React, {Fragment} from 'react';
import Image from './Image';
import utils from '../utils/';
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

const CardImage = cardData => cardData.type === 'application' ?
  <Image imgSrc={userLogo} /> :
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
  const atrrValues = Object.keys(attributes);
  
  console.log(attrMap, atrrValues);

  return attributes.map(attr => {
    const key = Object.keys(attr)[0];
    return (
      <Fragment>
        <h6>{attrMap[key]}</h6>
        <p>{key === 'selfie' ? 'Yes' : attr[key]}</p>
      </Fragment>
    )
  })
}

const Card = cardData => {
  return (
    <section>
      {
        cardData.type === 'application' && <CardHeader {...cardData.application} />
      }
      <main>
      {
        <CardImage {...cardData} />
      }
      <section>
        {
          <CardTitle {...cardData} />        
        }
        {
          <CardAttributes {...cardData} />        
        }
      </section>
      </main>
    </section>
  )
}

export default Card;