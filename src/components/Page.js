import React from 'react';

import About from './About'
import Menu from './Menu'
import Contact from './Contact'

function Page() {
  return (

    <div className="w3-content" style={{maxWidth:'1100px'}}>
      <About></About>
      <hr />
      <Menu></Menu>
      <hr />
      <Contact></Contact>
    </div>

  );
}

export default Page;