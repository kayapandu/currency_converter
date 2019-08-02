import React from 'react';
import FormInputCurrency from '../components/FormInputCurrency';
import DisplayCurrency from '../components/DisplayCurrency';
import { getData, addActiveRates, removeActiveRates, updateInitialValue } from '../actions';
import { Col, Form, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';

class ContentForeign extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valueRates: ''
        }
    }

    componentDidMount(){
        this.props.getData();
    }

    _handleOnChange = (e) => {
        this.setState({
            valueRates: e.target.value
        })
    }

    _onAddRates = (e) => {
        e.preventDefault();
        if(this.state.valueRates !== '') this.props.addActiveRates(this.state.valueRates);
    }

    _onRemoveRates = (value) => {
        this.props.removeActiveRates(value);
    }

    _onUpdateInitialValue = (e) => {
        this.props.updateInitialValue(e.target.value);
    }

    render(){
        const { initialValue, rates, activeRates } = this.props;
        return (
            <Col>
                <Col 
                    style={{
                        border: "1px black solid",
                        borderRadius: "0.5em",
                        margin: "5px",
                        padding: "10px 30px 30px"
                    }}
                >
                    <Label style={{fontSize: "16px", fontWeight: "bold"}}>USD - United States Dollar</Label>
                    <FormInputCurrency updateValue={this._onUpdateInitialValue} value={initialValue} />
                </Col>
                {activeRates.map((item, index) => {
                    const thisRates = parseFloat(initialValue * rates[item]);
                    const roundedRates = thisRates.toFixed(2);
                    return (
                        <DisplayCurrency 
                            key={index} 
                            name={item} 
                            removeRates={this._onRemoveRates}
                            ratesValue={roundedRates}
                            nowRates={rates[item]}
                            />
                    )
                })}
                <Col 
                    style={{
                        border: "1px black solid",
                        borderRadius: "0.5em",
                        margin: "5px",
                        //padding: "10px 30px 30px"
                    }}
                >
                    <Form 
                        style={{width: "100%", padding: "0px"}}
                        onSubmit={this._onAddRates}
                    >
                        <Col
                            style={{
                                display: "flex", 
                                flexDirection: "row", 
                                flexWrap: "wrap",
                                padding: "15px",
                                justifyContent: "space-around"
                                }}
                        >
                            <Col sm="8">
                                <Input
                                    type="select"
                                    onChange={this._handleOnChange}
                                >
                                    <option>Add currency ...</option>
                                    {Object.keys(rates).map((item, index) => {
                                        return (<option value={item} key={index} >{item}</option>);
                                    })}
                                </Input>
                            </Col>
                            <Col style={{alignItems: "center", textAlign: "center"}}>
                                <Button style={{width: "100%"}}>Add</Button>
                            </Col>
                        </Col>
                    </Form>
                </Col>
            </Col>
        )
    }
    
}

const mapStateToProps = (state) => ({
    initialValue: state.initialValue,
    rates: state.rates,
    activeRates: state.activeRates
});

const mapDispatchToProps = (dispatch) => ({
    getData: () => dispatch(getData()),
    updateInitialValue: (value) => dispatch(updateInitialValue(value)),
    addActiveRates: (value) => dispatch(addActiveRates(value)),
    removeActiveRates: (value) => dispatch(removeActiveRates(value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentForeign);