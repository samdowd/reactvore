'use strict';

import React            from 'react/addons';
import {ListenerMixin}  from 'reflux';
import {Navigation}     from 'react-router';

import OrderActions     from '../actions/OrderActions';

import UserStore        from '../stores/UserStore';
import RestaurantStore  from '../stores/RestaurantStore';

import Utils            from '../utils/Utils';
import API              from '../utils/API';

var OrderForm = React.createClass({

    mixins: [
      ListenerMixin,
      Navigation,
    ],

    componentWillMount() {
      UserStore.listen(() => this.setState({user: UserStore.getState()}));
      RestaurantStore.listen((restaurantData) => this.setState({restaurants: restaurantData}));
    },

    componentDidMount() {
      this.setState({
        user: UserStore.getState(),
        restaurants: RestaurantStore.restaurants,
      });
      RestaurantStore.listen((restaurantData) => this.setState({restaurants: restaurantData}));
    },

    getInitialState() {
      return {
        'user': null,
        'restaurants': null,
        'orderRestaurant': null,
        'orderTime': null,
        'orderNotes': null,
      }
    },

    render() {
        return (
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
                          <select className="form-control" id="new-order-restaurant" onChange={this.updateOrderRestaurant}>
                            {this.renderOptions()}
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-sm-6" htmlFor="new-order-time">When will you be leaving?</label>
                        <div className="col-sm-6"> 
                          <input className="form-control" type="text" id="new-order-time" onChange={this.updateOrderTime} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-sm-6" htmlFor="new-order-notes">Anything else you want fellow diners to know?</label>
                        <div className="col-sm-6"> 
                          <input className="form-control" type="text" id="new-order-notes"  onChange={this.updateOrderNotes}/>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={this.createOrder} data-dismiss="modal">Start your order</button>
                  </div>
                </div>
              </div>
            </div>
        )
    },

    renderOptions() {
      var renders = []
      renders.push(<option key="-1" value="">-- select a restaurant --</option>)
      for (var i in this.state.restaurants) {
        renders.push(<option key={i} value={this.state.restaurants[i].id}>{this.state.restaurants[i].name}</option>)
      }
      return renders
    },

    updateOrderRestaurant(e) {
      this.setState({
        'orderRestaurant': e.target.value
      })
    },

    updateOrderTime(e) {
      this.setState({
        'orderTime': e.target.value
      })
    },

    updateOrderNotes(e) {
      this.setState({
        'orderNotes': e.target.value
      })
    },

    createOrder() {
      API.post(
        'orders/',
        {
          'restaurant_id': this.state.orderRestaurant,
          'bentley_id': this.state.user.id,
          'departure_time': this.state.orderTime,
          'notes': this.state.orderNotes,
        },
        "Token 05866835febad1f785d6f99ef55fc74cbc427385"
      );
      OrderActions.fetchOrders();
    }
});

export default OrderForm;