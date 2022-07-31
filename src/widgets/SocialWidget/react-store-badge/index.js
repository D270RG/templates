import React from 'react';

import appStoreBadge from './appstore.svg';
import googlePlayBadge from './googleplay.svg';

function Badge(props) {
  return (
    <a href={props.url} title={props.name} className={props.className}>
      <img src={props.svg} alt={props.alt} style = {props.styles}/>
    </a>
  );
}

function Widget(props) {
  const appStore = (
    <Badge
      key="appstore"
      name={props.name}
      url={props.appStoreUrl}
      svg={appStoreBadge}
      styles={props.styles}
      alt="Download on the App Store"
      className="store-badge-app-store"
    />
  );

  const googlePlay = (
    <Badge
      key="googleplay"
      name={props.name}
      url={props.googlePlayUrl}
      svg={googlePlayBadge}
      styles={props.styles}
      alt="Get it on Google Play"
      className="store-badge-google-play"
    />
  );

  const badges = [];
  if (
    typeof navigator !== 'undefined' &&
    navigator.userAgent.indexOf('iPhone OS') !== -1
  ) {
    badges.push(appStore);
  } else if (
    typeof navigator !== 'undefined' &&
    navigator.userAgent.indexOf('Android') !== -1
  ) {
    badges.push(googlePlay);
  } else {
    badges.push(appStore);
    badges.push(googlePlay);
  }

  return <div>{badges}</div>;
}

export default Widget;
