import React from 'react';
import { connect } from 'react-redux';
import { appIsInitialized } from '../../store/App/app.reducer';
import { withRouter } from 'react-router';
import styled from 'styled-components';

const LoadWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20%;
`;

const Logo = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;

export const Loader = () => (
    <LoadWrapper>
        <Logo />
    </LoadWrapper>
);

class AppReadyWaiter extends React.PureComponent {
    render() {
        const { appIsReady, children } = this.props;
        return !appIsReady ? <Loader /> : <div>{children}</div>;
    }
}

const mapStateToProps = state => ({
    appIsReady: appIsInitialized(state),
});

const mapDispatchToProps = dispatch => ({});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AppReadyWaiter)
);
