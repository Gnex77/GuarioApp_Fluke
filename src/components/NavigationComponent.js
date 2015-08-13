'use strict';

var React = require('react/addons');
var MenuItem = require('./MenuItem');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

//var Actions = require('actions/xxx')

require('styles/NavigationComponent.scss');

var NavigationComponent = React.createClass({
    mixins: [PureRenderMixin],
    menuItems: [
        {
            menuText: 'Users',
            iconClass: 'fa-user',
            isActive: true
        }, {
            menuText: 'Groups',
            iconClass: 'fa-users',
            isActive: false
        }
    ],
    updatePageNameHandler: function updatePageNameHandler(menuText) {
      this.props.onPageNameChange(menuText);
    },
    menuItemClickHandler: function menuItemClickHandler(menuObject) {
        var self = this,
          newItems = self.state.items.map(function(item, index) {
            item.isActive = (menuObject.index === index) ? true : false;
            return item;
          });

        self.updatePageNameHandler(menuObject.menuText);

        self.replaceState({
            items: newItems
        });
    },
    getInitialState: function() {
        return {
            items: this.menuItems
        };
    },
    getDefaultProps: function() {},
    componentWillMount: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillUnmount: function() {},

    render: function() {
        var self = this,
            items = this.state.items.map(function(item, index) {
              var menuObject = {
                index: index,
                menuText: item.menuText
              };
                return <MenuItem iconClass={item.iconClass} isActive={item.isActive} key={index} menuText={item.menuText} onMenuItemClick={self.menuItemClickHandler.bind(self, menuObject)}/>;
            });
        return (
          <div className="col-sm-3 col-md-2 sidebar">
            <ul className="nav nav-sidebar">
                {items}
            </ul>
          </div>
        );
    }
});

module.exports = NavigationComponent;
