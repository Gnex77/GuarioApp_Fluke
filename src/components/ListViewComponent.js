'use strict';

var React = require('react/addons');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

//var Actions = require('actions/xxx')

require('styles/ListViewComponent.scss');

var ListViewComponent = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},

  render: function () {
    var list = this.props.list.map(function (item, index) {
      return <li key={index}>{item}</li>;
    });
    return (
      <div className="list-view-container">
        <h1>{this.props.pageName}</h1>
        <div className="list-view">
          <ul className="list-unstyled">
            {list}
          </ul>
        </div>
      </div>
      );
  }
});

module.exports = ListViewComponent;
