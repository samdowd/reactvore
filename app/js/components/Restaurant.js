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

var Restaurant = React.createClass({

  render() {
    return (
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.restaurant.name}</h3>
          </div>
          <div className="panel-body">
            <div className="col-md-8">
              <p>{this.props.restaurant.address}</p>
              <p>{this.props.restaurant.phoneNumber}</p>
              <p><a href={this.props.restaurant.yelpURL} target="_blank">Yelp</a></p>
            </div>
            <div className="col-md-4">
              <button type="button" className="btn btn-default btn-lg" data-toggle="modal" data-target={'#restaurantModal' + this.props.restaurant.id}>
                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> <p>Add to order!</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },

});

export default Restaurant;