'use strict';

import Reflux        from 'reflux';
import listenTo      from 'react-listenTo';

import OrderActions  from '../actions/OrderActions';
import API           from '../utils/API';

var OrderStore = Reflux.createStore({

  mixins: [listenTo],

  init() {
    this.fetchOrders();
    this.listenTo(OrderActions.fetchOrders, this.fetchOrders());
  },

  fetchOrders() {
    console.log('orders fetched')
    API.get('orders').then(resp => {
      this.orders = resp;
      this.trigger(this.orders);
    });
  },

});

export default OrderStore;