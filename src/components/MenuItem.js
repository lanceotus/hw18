import React from 'react';

export default class MenuItem extends React.Component {
    render() {
        return (
            <div className="menu__item">
                <a href={this.props.menu_link} className="menu__text">{this.props.text}</a>
            </div>
        );
    }
}
