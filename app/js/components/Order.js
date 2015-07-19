'use strict';

import React            from 'react/addons';

var Order = React.createClass({

    render() {
        return (
          <div className="form-group">
            <div className="col-sm-2 col-sm-offset-1"> 
              <input className="form-control" type="number" id={'item' + this.props.item.id} />
            </div>
            <label className="control-label col-sm-9" htmlFor={'item' + this.props.item.id}>{this.props.item.name}</label>
          </div>
        )
    }
});

export default Order;