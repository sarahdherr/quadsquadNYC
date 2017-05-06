import { connect } from 'react-redux'
import Logout from '../components/Logout'
import { logout } from '../reducers/auth'

const mapStateToProps = null

const mapDispatchToProps = {logout}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
