import * as React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('uiStore')
@observer
export default class Sidebar extends React.Component<{ uiStore?: any }, {}> {
    render() {

        const active = this.props.uiStore.isSidebarActive;
        const className = active?'active':'';
        return (
            <aside className={className}>
                <nav className="side-navigation">
                    <ul>
                        <li><Link to="/"><img src="https://via.placeholder.com/350x150"/></Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </aside>
        );
    }
}