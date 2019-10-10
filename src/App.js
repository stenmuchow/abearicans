import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import Routes from './Routes';

function Application() {
	return <Routes />;
}
const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Application)
);
