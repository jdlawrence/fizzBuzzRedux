import { connect } from 'react-redux'
import DisplayStrings from '../components/DisplayStrings';

const mapStateToProps = (state) => ({
  fizz: state.fizz,
  buzz: state.buzz
})

const DisplayStringContainer = connect(mapStateToProps)( DisplayStrings );

export default DisplayStringContainer;
