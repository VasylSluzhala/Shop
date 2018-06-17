import * as React from 'react';
import HeaderTop from './HeaderTop';
import HeaderInner from './HeaderInner';

function Header(props) {
      return (
        <header id="header" className="header3">
            <HeaderTop />
            <HeaderInner />     
        </header>
      );
  }

  export default Header;