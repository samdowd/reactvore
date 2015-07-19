'use strict';

import React            from 'react/addons';

var Meal = React.createClass({

    render() {
        return (
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">{this.props.user.username}&#39;s Meal at {this.props.restaurant}</h3>
              </div>
              <div className="panel-body">
                List what they bought here.
              </div>
            </div>
          </div>
        )
    }
});

export default Meal;