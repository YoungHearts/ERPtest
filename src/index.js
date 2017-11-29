import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './common/Global'
import createStore from './store/createStore';
import AppWithNavigationState from './AppWithNavigationState';

const store = createStore();
export default class ERPtest extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
};

AppRegistry.registerComponent('ERPtest', () => ERPtest);