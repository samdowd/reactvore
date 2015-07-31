'use strict';

import Reflux from 'reflux';

var OrderActions = Reflux.createActions({
    "fetchOrders": {asyncResult: true}
});

export default OrderActions;