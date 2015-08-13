'use strict';

describe('AddUserButtonComponent', function () {
  var React = require('react/addons');
  var AddUserButtonComponent, component;

  beforeEach(function () {
    AddUserButtonComponent = require('components/AddUserButtonComponent.js');
    component = React.createElement(AddUserButtonComponent);
  });

  it('should create a new instance of AddUserButtonComponent', function () {
    expect(component).toBeDefined();
  });
});
