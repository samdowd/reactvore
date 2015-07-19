'use strict';

import React            from 'react/addons';

import {ListenerMixin}  from 'reflux';
import {Navigation}     from 'react-router';

import MenuItemStore    from '../stores/MenuItemStore';

import MenuItem         from '../components/MenuItem';

var MenuSection = React.createClass({

    mixins: [
      ListenerMixin,
      Navigation
    ],

    componentWillMount() {
      MenuItemStore.listen((menuItemData) => this.setState({menuItems: menuItemData}));
    },

    componentDidMount() {
      this.setState({menuItems: MenuItemStore.menuItems});

      MenuItemStore.listen((menuItemData) => this.setState({menuItems: menuItemData}));
    },

    getInitialState() {
      return {
        'menuItems': null,
      }
    },

    render() {
        return (
            <div>
                <h3>{this.props.section.name}</h3>
                <ul className="list-group">
                    {this.renderItems()}
                </ul>
            </div>
        )
    },

    renderItems() {
        var renders = []
        for (var i in this.state.menuItems) {
          if (this.props.section.id == this.state.menuItems[i].menuSection) {
            renders.push(<MenuItem key={i} item={this.state.menuItems[i]} />)
          }
        }
        return renders
    }
});

export default MenuSection;