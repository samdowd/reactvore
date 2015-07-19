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

import Restaurant    from '../components/Restaurant';
import MealForm      from '../components/MealForm';

var HomePage = React.createClass({

  mixins: [
    ListenerMixin,
    Navigation
  ],

  componentWillMount() {
    UserStore.listen(() => this.setState({user: UserStore.getState()}));
    RestaurantStore.listen((restaurantData) => this.setState({restaurants: restaurantData}));
    MenuSectionStore.listen((menuSectionData) => this.setState({menuSections: menuSectionData}));
    OrderStore.listen((orderData) => this.setState({orders: orderData}));
  },

  componentDidMount() {
    this.setState({user: UserStore.getState()});
    this.setState({restaurants: RestaurantStore.restaurants});
    this.setState({menuSections: MenuSectionStore.menuSections});
    this.setState({orders: OrderStore.orders});

    RestaurantStore.listen((restaurantData) => this.setState({restaurants: restaurantData}));
    MenuSectionStore.listen((menuSectionData) => this.setState({menuSections: menuSectionData}));
    OrderStore.listen((orderData) => this.setState({orders: orderData}));
  },

  getInitialState() {
    return {
      'user': null,
      'restaurants': null,
      'menuSections': null,
      'orders': null,
    }
  },

  render() {
    return (
      <DocumentTitle title="Home">
        <section className="container">

          {this.renderRestaurants()}
          <button type="button" className="btn btn-default btn-lg col-md-12" data-toggle="modal" data-target='#newOrderModal'>
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> <p>Create a new order!</p>
          </button>
          <div className="modal-holder">
            {this.renderMealForms()}
            <div className="modal fade" id='newOrderModal' tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title" id="myModalLabel">You are a hero!</h4>
                  </div>
                  <div className="modal-body">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label className="control-label col-sm-6" htmlFor="new-order-restaurant">Where would you like to eat?</label>
                        <div className="col-sm-6"> 
                          <input className="form-control" type="text" id="new-order-restaurant" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-sm-6" htmlFor="new-order-time">When will you be leaving?</label>
                        <div className="col-sm-6"> 
                          <input className="form-control" type="text" id="new-order-time" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-sm-6" htmlFor="new-order-notes">Anything else you want fellow diners to know?</label>
                        <div className="col-sm-6"> 
                          <input className="form-control" type="text" id="new-order-notes" />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Start your order</button>
                  </div>
                </div>
              </div>
            </div>
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

        for (var j in this.state.orders) {
          if (this.state.orders[i].bentley) {

          }
        }

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