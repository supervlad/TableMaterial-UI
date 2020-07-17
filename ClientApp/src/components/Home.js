import React, { Component } from 'react';
import { HeaderHandBook } from './HeaderHandBook';
import { EnhancedTable } from './MainTable';

export class Home extends Component {
  static displayName = Home.name;

  render () {
      return (
          <div>
              <HeaderHandBook />
              <EnhancedTable />
          </div>
    );
  }
}
