'use strict';

describe('AddUserComponent', function () {
  var React = require('react/addons');
  var AddUserComponent, component;

  beforeEach(function () {
    AddUserComponent = require('components/AddUserComponent.js');
    component = React.createElement(AddUserComponent);
  });

  it('should create a new instance of AddUserComponent', function () {
    expect(component).toBeDefined();
  });
});
