import {connect} from 'react-redux'
import Profile from '../components/Profile'

const mapStateToProps = state => ({ user: state.auth })

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
