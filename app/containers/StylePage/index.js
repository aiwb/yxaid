import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Page from './components/index';
import * as PageActions from './actions/index';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PageActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
