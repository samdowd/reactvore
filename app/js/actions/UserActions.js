'use strict';

import Reflux from 'reflux';

var UserActions = Reflux.createActions({
    "Login": {asyncResult: true}
});

export default UserActions;