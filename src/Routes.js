import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Dashboard from './containers/Dashboard/Dashboard';

function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={Dashboard} />
		</Switch>
	);
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Routes)
);
