import { connect } from 'react-redux'
import Login from '../components/Login'
import { login } from '../reducers/auth'

const mapStateToProps = null

const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(Login)
