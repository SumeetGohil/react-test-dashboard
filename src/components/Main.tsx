import * as React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './../pages/HomePage';
import AboutPage from './../pages/AboutPage';
import { inject, observer } from 'mobx-react';

@inject('uiStore')
@observer
export default class Main extends React.Component<{uiStore?: any}, {}> {

    constructor(props) {
        super(props);
    }

    toggleSidebar = () => {
        // console.log(this.props);
        this.props.uiStore.toggleSidebar()
    }

    render(){
        const active = this.props.uiStore.isSidebarActive;
        const className = active ? 'active' : '';
        return (
            <main className={className}>
                <header className="row middle-sm">
                    <div className="col-xs center middle">
                        <button onClick={this.toggleSidebar}><i className="fa fa-bars"></i> Toggle</button>
                    </div>
                    <div className="col-sm">
                        <h1>Title Area</h1>
                    </div>
                </header>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
            </main>
        );
    }
}