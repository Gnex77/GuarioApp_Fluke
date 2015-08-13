'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import ListViewComponent from 'components/ListViewComponent.js';

describe('ListViewComponent', () => {
    let ListViewComponentComponent;

    beforeEach(() => {
        ListViewComponentComponent = createComponent(ListViewComponent);
    });

    it('should have its component name as default className', () => {
        expect(ListViewComponentComponent._store.props.className).toBe('ListViewComponent');
    });
});
