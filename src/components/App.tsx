import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as store from './../store';
import { Provider, observer } from 'mobx-react';
import Sidebar from './Sidebar';
import Main from './Main';

@observer
export default class App extends React.Component {
    render() {
        return (
            <Provider {...store}>
                <Router>
                    <div>
                        <Sidebar />
                        <Main />
                    </div>
                </Router>
            </Provider>
        );
    }
}