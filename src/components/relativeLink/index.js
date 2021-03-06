import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import buttonStyle from 'react-toolbox/lib/button/theme.css';
import offlineStyle from '../offlineWrapper/offlineWrapper.css';

const RelativeLink = ({
  location, to, children, className, raised, neutral, primary, flat, disableWhenOffline,
}) => {
  let style = '';
  if (raised !== undefined) style += `${buttonStyle.raised} `;
  if (neutral !== undefined) style += `${buttonStyle.neutral} `;
  if (flat !== undefined) style += `${buttonStyle.flat} `;
  if (primary !== undefined) style += `${buttonStyle.primary} `;
  if (disableWhenOffline !== undefined) style += `${offlineStyle.disableWhenOffline} `;
  if (style !== '') style += ` ${buttonStyle.button}`;

  const path = location.pathname.indexOf(`/${to}`) < 0 ? `${location.pathname}/${to}`.replace('//', '/') : location.pathname;
  return (
    <Link className={`${className} ${style}`} to={path}>{ children }</Link>
  );
};

export default withRouter(RelativeLink);
