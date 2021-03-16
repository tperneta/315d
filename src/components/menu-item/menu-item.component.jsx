import React from 'react';

import './menu-item.styles.css';

const MenuItem = ({ page }) => (
  <div className={`${page} menu-item`}>
      <a href={page} className='page-link'>{page.toUpperCase()}</a>
  </div>
);

export default MenuItem;