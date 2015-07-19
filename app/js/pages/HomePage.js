'use strict';

import React         from 'react/addons';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

import {ListenerMixin}  from 'reflux';
import {Navigation}     from 'react-router';

import UserActions      from '../actions/UserActions';
import UserStore        from '../stores/UserStore';
import RestaurantStore  from '../stores/RestaurantStore';
import MenuSectionStore from '../stores/MenuSectionStore';

import Restaurant    from '../components/Restaurant';
import MealForm      from '../components/MealForm';

var HomePage = React.createClass({

  mixins: [
    ListenerMixin,
    Navigation
  ],

  componentWillMount() {
    RestaurantStore.listen((restaurantData) => this.setState({restaurants: restaurantData}));
    MenuSectionStore.listen((menuSectionData) => this.setState({menuSections: menuSectionData}));
  },

  componentDidMount() {
    this.setState({restaurants: RestaurantStore.restaurants});
    this.setState({menuSections: MenuSectionStore.menuSections});

    RestaurantStore.listen((restaurantData) => this.setState({restaurants: restaurantData}));
    MenuSectionStore.listen((menuSectionData) => this.setState({menuSections: menuSectionData}));
  },

  getInitialState() {
    return {
      'restaurants': null,
      'menuSections': null,
    }
  },

  render() {
    return (
      <DocumentTitle title="Home">
        <section className="container">

          {this.renderRestaurants()}
          <button type="button" className="btn btn-default btn-lg col-md-12">
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> <p>Create a new order!</p>
          </button>
          <div className="meal-form-holder">
            {this.renderMealForms()}
          </div>

        </section>
      </DocumentTitle>
    );
  },

  renderRestaurants() {
    var renders = []
    for (var i in this.state.restaurants) {
      var restaurant = this.state.restaurants[i]
      if (restaurant.hasOrderAcceptingMeals) {
        renders.push(
          <Restaurant key = {restaurant.url} restaurant = {restaurant} />
        )
      }
    }
    return renders
  },

  renderMealForms() {
    var renders = []
    for (var i in this.state.restaurants) {
      var restaurant = this.state.restaurants[i]
      var sections = []

      for (var j in this.state.menuSections) {
        if (this.state.menuSections[j].restaurant == restaurant.id) {
          sections.push(this.state.menuSections[j])
        }
      }

      renders.push(
        <MealForm key={i} restaurant={restaurant} sections={sections} />
      )
    }
    return renders
  }

});

export default HomePage;