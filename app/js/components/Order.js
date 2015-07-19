'use strict';

import React            from 'react/addons';
import {ListenerMixin}  from 'reflux';
import {Navigation}     from 'react-router';
import {Link}           from 'react-router';
import UserActions      from '../actions/UserActions';
import UserStore        from '../stores/UserStore';
import RestaurantStore  from '../stores/RestaurantStore';

var Order = React.createClass({

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.data.bentley} is going to {this.props.data.restaurant}</h3>
        </div>
        <div className="panel-body">
          
        </div>
      </div>
    );
  }

});

export default Order;