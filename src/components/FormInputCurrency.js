import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

class FormInputCurrency extends React.Component {

    render(){
        const { value, updateValue } = this.props;
        return(
            <InputGroup>
                <InputGroupAddon size="lg" addonType="prepend">USD</InputGroupAddon>
                <Input type="number" onChange={updateValue} placeholder="Input Amount" value={value} />
            </InputGroup>
        )
    }
}

export default FormInputCurrency;