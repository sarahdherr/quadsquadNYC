import { connect } from 'react-redux'
import Signup from '../components/Signup'
import { signup } from '../reducers/auth'

const mapStateToProps = null

const mapDispatchToProps = {signup}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
