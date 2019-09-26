import React from 'react';
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default class Header extends React.Component {
    render() {
        const left_menu = this.props.menu.left.map((item) => {
            return <MenuItem menu_link={item.menu_item_link} text={item.menu_item_text}/>})
        const right_menu = this.props.menu.right.map((item) => {
            return <MenuItem menu_link={item.menu_item_link} text={item.menu_item_text}/>})

        return (
            <div className="header">
                <Logo logotext={this.props.logotext}/>
                <div className="menu__item_group">
                    {left_menu}
                </div>
                <div className="horizontal_spacer"></div>
                <div className="menu__item_group">
                    {right_menu}
                </div>
            </div>
        );
    }
}
