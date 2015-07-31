'use strict';

import React            from 'react/addons';
import {ListenerMixin}  from 'reflux';
import {Navigation}     from 'react-router';
import {Link}           from 'react-router';
import DocumentTitle    from 'react-document-title';
import UserActions      from '../actions/UserActions';
import UserStore        from '../stores/UserStore';
import RestaurantStore  from '../stores/RestaurantStore';

import MealForm from '../components/MealForm';

var Order = React.createClass({

  render() {
    var order = this.props.order;
    return (
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{order.bentley.username} is headed to {order.restaurant.name}</h3>
          </div>
          <div className="panel-body">
            <div className="col-md-8">
              <p>{order.bentley.username} is leaving at {order.departureTime}</p>
            </div>
            <div className="col-md-4">
              <button type="button" className="btn btn-default btn-lg" data-toggle="modal" data-target={'#restaurantModal' + order.restaurant.id}>
                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> <p>Add to order!</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },

});

export default Order;