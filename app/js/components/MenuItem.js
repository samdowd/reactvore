'use strict';

import React            from 'react/addons';

import {ListenerMixin}  from 'reflux';
import {Navigation}     from 'react-router';

var MenuItem = React.createClass({

    render() {
        return (
            <li className="list-group-item input-group">
              <label htmlFor={this.props.item.id}>{this.props.item.name}</label>
              <input className='form-control' type="number" id={this.props.item.id} />
            </li>
        )
    }
});

export default MenuItem;