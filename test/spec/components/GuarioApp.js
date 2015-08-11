'use strict';

describe('GuarioApp', () => {
  let React = require('react/addons');
  let GuarioApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    GuarioApp = require('components/GuarioApp.js');
    component = React.createElement(GuarioApp);
  });

  it('should create a new instance of GuarioApp', () => {
    expect(component).toBeDefined();
  });
});
