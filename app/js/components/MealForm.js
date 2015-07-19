'use strict';

import React            from 'react/addons';
import {ListenerMixin}  from 'reflux';
import {Navigation}     from 'react-router';
import {Link}           from 'react-router';
import UserActions      from '../actions/UserActions';
import MenuSectionStore    from '../stores/MenuSectionStore';
import MenuSection      from '../components/MenuSection.js';

import API              from '../utils/API';

var MealForm = React.createClass({
  render() {
    return (
      <div className="modal fade" id={'restaurantModal' + this.props.restaurant.id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Someone is going to {this.props.restaurant.name}</h4>
            </div>
            <div className="modal-body">
              <form action="http://localhost:4000/api/meals/" method="POST" className="form-horizontal">
                {this.renderSections()}
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary" onClick={this.createMeal()}>Submit your order</button>
            </div>
          </div>
        </div>
      </div>
    );
  },

  renderSections() {
    var renders = []

    for (var i in this.props.sections) {
      renders.push(<MenuSection key={i} section={this.props.sections[i]} />)
    }
    return renders
  },

  createMeal() {

  }
});

export default MealForm;