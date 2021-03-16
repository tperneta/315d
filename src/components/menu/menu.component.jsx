import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './menu.styles.css';

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          page: 'home',
          id: 1
        },
        {
          page: 'about',
          id: 2
        },
        {
          page: 'projects',
          id: 3
        },
        {
          page: 'contact',
          id: 4
        }
      ]
    };
  }

  render() {
    return (
      <div className='menu-list'>
        {this.state.sections.map(({ page, id }) => (
          <MenuItem key={id} page={page} />
        ))}
      </div>
    );
  }
}

export default Menu;