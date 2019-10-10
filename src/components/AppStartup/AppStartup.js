import * as React from 'react';
import { connect } from 'react-redux';
import actions from '../../store/App/app.action';

class AppStartup extends React.PureComponent {
  componentDidMount() {
    this.props.initApp();
  }
  render() {
    return null;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  initApp: () => dispatch(actions.appInit()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppStartup);
