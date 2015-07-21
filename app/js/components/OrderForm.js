'use strict';

import React            from 'react/addons';
import {ListenerMixin}  from 'reflux';
import {Navigation}     from 'react-router';

import RestaurantStore  from '../stores/RestaurantStore';

var OrderForm = React.createClass({

    mixins: [
      ListenerMixin,
      Navigation,
    ],

    componentWillMount() {
      RestaurantStore.listen((restaurantData) => this.setState({restaurants: restaurantData}));
    },

    componentDidMount() {
      this.setState({restaurants: RestaurantStore.restaurants});

      RestaurantStore.listen((restaurantData) => this.setState({restaurants: restaurantData}));
    },

    getInitialState() {
      return {
        'restaurants': null,
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
                          <select className="form-control" id="new-order-restaurant">
                            {this.renderOptions()}
                          </select>
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
        )
    },

    renderOptions() {
      var renders = []
      for (var i in this.state.restaurants) {
        renders.push(<option key={i} value={this.state.restaurants[i].name}>{this.state.restaurants[i].name}</option>)
      }
      return renders
    }
});

export default OrderForm;