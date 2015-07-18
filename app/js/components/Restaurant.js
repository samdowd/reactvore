'use strict';

import React            from 'react/addons';
import {ListenerMixin}  from 'reflux';
import {Navigation}     from 'react-router';
import {Link}           from 'react-router';
import DocumentTitle    from 'react-document-title';
import UserActions      from '../actions/UserActions';
import UserStore        from '../stores/UserStore';
import RestaurantStore  from '../stores/RestaurantStore';

var Restaurant = React.createClass({

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.data.name}</h3>
        </div>
        <div className="panel-body">
          <p>{this.props.data.address}</p>
          <p>{this.props.data.phoneNumber}</p>
          <a href={this.props.data.yelpURL} target="_blank">Yelp</a>
        </div>
      </div>
    );
  }

});

export default Restaurant;