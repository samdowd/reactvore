'use strict';

import Reflux             from 'reflux';

import API from '../utils/API';

var OrderStore = Reflux.createStore({

  init() {
    API.get('orders').then(resp => {
      this.order = resp;
      this.trigger(this.order);
    });
  },

});

export default OrderStore;