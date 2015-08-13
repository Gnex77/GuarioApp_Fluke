'use strict';

var React = require('react/addons');

var AddUserButtonComponent = React.createClass({

  render: function () {
    var self = this;
    return (
      <div className="fab-create">
        <button disabled={self.props.isDisabled} className="btn btn-success fab-btn" type="button" name="button" onClick={self.props.clickHandler}><i className="fa fa-plus fa-2x"></i></button>
      </div>
      );
  }
});

module.exports = AddUserButtonComponent;
