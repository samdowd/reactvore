'use strict';

import React            from 'react/addons';

import {ListenerMixin}  from 'reflux';
import {Navigation}     from 'react-router';

import MenuItemStore    from '../stores/MenuItemStore';

var MenuItem = React.createClass({

    mixins: [
      ListenerMixin,
    ],

    getInitialState() {
      return {
        'quantity': null
      }
    },

    componentWillMount() {
      MenuItemStore.listen(() => this.setState({menuItems: MenuItemStore.getState()}));
    },

    componentDidMount() {
      this.setState({menuItems: MenuItemStore.getState()});
    },

    render() {
        return (
          <div className="form-group">
            <div className="col-sm-2 col-sm-offset-1"> 
              <input onChange={this.updateQuantity} className="form-control" type="number" name={'item' + this.props.item.id} id={'item' + this.props.item.id} />
            </div>
            <label className="control-label col-sm-9" htmlFor={'item' + this.props.item.id}>{this.props.item.name}</label>
          </div>
        )
    },

    updateQuantity(e) {
      this.setState({
        'quantity': e.target.value
      });
    },
});

export default MenuItem;