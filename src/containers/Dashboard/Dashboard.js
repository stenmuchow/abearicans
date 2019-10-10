import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { getSites } from '../../store/Dashboard/dashboard.reducer';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Site from './Site';
const Dashboard = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
`;

function _Dashboard({ sites }) {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Abearicans</Typography>
                </Toolbar>
            </AppBar>
            <Dashboard>
                {sites &&
                    sites.map((site, key) => <Site site={site} key={key} />)}
            </Dashboard>
        </>
    );
}

const mapStateToProps = state => ({
    sites: getSites(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(_Dashboard)
);
