'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import MenuItem from 'components/MenuItem.js';

describe('MenuItem', () => {
    let MenuItemComponent;

    beforeEach(() => {
        MenuItemComponent = createComponent(MenuItem);
    });

    it('should have its component name as default className', () => {
        expect(MenuItemComponent._store.props.className).toBe('MenuItem');
    });
});
