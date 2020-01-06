import 'react';
import { shallow } from 'enzyme';

import ContentForeign from './ContentForeign';

jest
    .mock('../components/FormInputCurrency', () => 'FormInput')
    .mock('../components/DisplayCurrency', () => 'DisplayCurrency');

const getInstance = props => new ContentForeign(props);

describe('all function work correctly', () => {
    beforeEach(() => {
        jest.clearAllMocks();

        this.props = {
            getData: jest.fn(),
            addActiveRates: jest.fn(),
            removeActiveRates: jest.fn(),
            updateInitialValue: jest.fn(),
            intiialValue: 10,
            rates: 10000,
            activeRates: {}
        };
    });

    test('correct onUpdateInitialValue', () => {
        const instance = getInstance();
        const updateValue = instance._onUpdateInitialValue;
        updateValue();

        expect(instance.props.updateInitialValue).toBeCalled();
    });
})