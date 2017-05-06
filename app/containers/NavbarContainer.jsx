import {connect} from 'react-redux'

import Navbar from '../components/Navbar'

const mapStateToProps = state => {
  return (
  {
    user: state.auth
  }
  )
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
