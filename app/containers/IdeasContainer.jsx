import {connect} from 'react-redux'
import Ideas from '../components/Ideas'

const mapStateToProps = state => ({ ideas: state.ideas })

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Ideas)
