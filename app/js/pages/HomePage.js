'use strict';

import React         from 'react/addons';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

import {ListenerMixin}  from 'reflux';
import {Navigation}     from 'react-router';
import UserActions      from '../actions/UserActions';
import UserStore        from '../stores/UserStore';
import RestaurantStore  from '../stores/RestaurantStore';

import Restaurant    from '../components/Restaurant'

var datum = {
  address: "850 Market Street",
  hasOrderAcceptingMeals: false,
  name: "Community Pie",
  phoneNumber: "(423) 486-1743",
  url: "community-pie",
  yelpURL: "http://www.yelp.com/biz/community-pie-chattanooga",
}

var HomePage = React.createClass({

  mixins: [
    ListenerMixin,
    Navigation
  ],

  componentWillMount() {
    RestaurantStore.listen((data) => this.setState({restaurants: data}));
  },

  componentDidMount() {
    this.setState({restaurants: RestaurantStore.restaurant});
  },

  getInitialState() {
    return {
      'restaurant': null
    }
  },

  render() {
    return (
      <DocumentTitle title="Home">
        <section className="container">

          <div className="col-md-6">
            {this.renderRestaurants()}
          </div>

        </section>
      </DocumentTitle>
    );
  },

  renderRestaurants() {
    var renders = []
    for (var i in this.state.restaurants) {
      var restaurant = this.state.restaurants[i]
      renders.push(
        <Restaurant key = {i} data = {restaurant} />
      )
    }
    return renders
  }

});

export default HomePage;