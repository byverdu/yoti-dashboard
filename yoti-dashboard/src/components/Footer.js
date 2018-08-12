import React from 'react';
import './components.css';

const Footer = () => {
  return (
    <div className="login-footer center-align" >
      <div className="bg-c-1 text-c-17" style={{height:'70px', display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        <ul className="list-inline margin-xs-top-1 " style={{lineHeight:'70px',fontWeight:'bold'}} >
          <li >
            <p style={{fontWeight:'500'}} >Get the free Yoti app</p>
          </li>
          <li >
            <a href="https://itunes.apple.com/us/app/yoti/id983980808?ls=1&amp;mt=8" target="_blank" >
              <img height="40" src="https://static.yoti.com/images/home/app-store-badge.png" alt="Download Apple IOS mobile app" />
              </a>
            </li>
            <li style={{marginLeft:'20px'}} >
              <a href="https://play.google.com/store/apps/details?id=com.yoti.mobile.android.live" target="_blank" >
                <img height="40" src="https://static.yoti.com/images/home/google-play-badge.png" alt="Download Google Android mobile app" />
              </a>
            </li>
          </ul>
          </div>
          <div className="privacy-policy bg-c-2 text-c-17" style={{height:'40px',fontSize:"12px",lineHeight:'40px',display: 'flex', justifyContent:'space-around', alignItems: 'center'}} >
            <span className="p-xs-l-20" style={{position:'absolute',left:'0px',display: 'flex', justifyContent:'center', alignItems: 'center'}} >
              <span class="icon icon-logo-circle-no-border text-c-17" style={{verticalAlign:'middle',marginRight:'8px'}} data-reactid="34">
              </span>
              © Yoti Ltd. 2018
            </span>
            <div>
              <a className="text-c-17 p-xs-l-16 p-xs-r-16" href="https://www.yoti.com/privacy-policy" style={{paddingLeft:'4px'}} >Privacy Policy
              </a>
              <a className="text-c-17 p-xs-l-16 p-xs-r-16" href="https://www.yoti.com/terms" >Terms &amp; Conditions</a>
            </div>
            <a className="text-c-17 p-xs-l-16 p-xs-r-16" href="https://www.yoti.com/contact/" style={{position:'absolute',right:'4px',lineHeight:'40px'}}>Contact us
            </a>
          </div>
        </div>
  );
}

export default Footer;