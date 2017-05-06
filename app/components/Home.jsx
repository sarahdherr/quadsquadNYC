import React from 'react'

import NavbarContainer from '../containers/NavbarContainer'

export default (props) =>
    <div>
      <NavbarContainer />
      {
        props.children
      }
    </div>
