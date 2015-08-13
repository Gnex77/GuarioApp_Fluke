'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import NavigationComponent from 'components/NavigationComponent.js';

describe('NavigationComponent', () => {
    let NavigationComponentComponent;

    beforeEach(() => {
        NavigationComponentComponent = createComponent(NavigationComponent);
    });

    it('should have its component name as default className', () => {
        expect(NavigationComponentComponent._store.props.className).toBe('NavigationComponent');
    });
});
