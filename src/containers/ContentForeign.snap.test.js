import React from 'react';
import renderer from 'react-test-renderer';

import FormInputCurrency from '../components/FormInputCurrency';
import DisplayCurrency from '../components/DisplayCurrency';

describe('render correctly', () => {
    test('should render FormInputCurrency', () => {
        const component = renderer.create(
            <FormInputCurrency/>
        )
        
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should render DisplayCurrency', () => {
        const component = renderer.create(
            <DisplayCurrency/>
        )

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})