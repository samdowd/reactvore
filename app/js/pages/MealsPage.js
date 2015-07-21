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
import OrderStore       from '../stores/OrderStore';
import MealStore        from '../stores/MealStore';

import Restaurant    from '../components/Restaurant';
import MealForm      from '../components/MealForm';

import Meal             from '../components/Meal';

var MealsPage = React.createClass({

  mixins: [
    ListenerMixin,
    Navigation
  ],

 componentWillMount() {
    UserStore.listen(() => this.setState({user: UserStore.getState()}));
    RestaurantStore.listen((restaurantData) => this.setState({restaurants: restaurantData}));
    MenuSectionStore.listen((menuSectionData) => this.setState({menuSections: menuSectionData}));
    OrderStore.listen((orderData) => this.setState({orders: orderData}));
    MealStore.listen((mealData) => this.setState({meals: mealData}));
  },

  componentDidMount() {
    this.setState({user: UserStore.getState()});
    this.setState({restaurants: RestaurantStore.restaurants});
    this.setState({menuSections: MenuSectionStore.menuSections});
    this.setState({orders: OrderStore.orders});
    this.setState({meals: MealStore.getState()});

    RestaurantStore.listen((restaurantData) => this.setState({restaurants: restaurantData}));
    MenuSectionStore.listen((menuSectionData) => this.setState({menuSections: menuSectionData}));
    OrderStore.listen((orderData) => this.setState({orders: orderData}));
    MealStore.listen((mealData) => this.setState({meals: mealData}));
  },

  getInitialState() {
    return {
      'user': null,
      'restaurants': null,
      'menuSections': null,
      'orders': null,
      'meals': null,
    }
  },

  render() {
    return (
      <DocumentTitle title="Meals">
        <section className="container">
          {this.renderMeals()}
        </section>
      </DocumentTitle>
    );
  },

  renderMeals() {
    var renders = []
    for (var i in this.state.meals) {
      var user = this.state.user
      console.log(this.state.meals)
      for (var j in this.state.restaurants) {
        console.log(this.state.restaurants[j].id)
        console.log(this.state.meals[i].restaurant)
        if (this.state.restaurants[j].id == this.state.meals[i].order) {
          var restaurant = this.state.restaurants[j].name
        }
      }
      renders.push(
        <Meal key={i} user={user} restaurant={restaurant} meal={this.state.meals[i]} />
      )
    }
    return(
      renders
    )
  }

});

export default MealsPage;