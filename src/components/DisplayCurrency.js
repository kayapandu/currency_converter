import React from 'react';
import { Col, Button } from 'reactstrap';

class DisplayCurrency extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
    const { name, ratesValue, nowRates } = this.props;
        return(
            <Col style={styles.boxCurrency}>
                <Col xs="10">
                    <Col style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",

                        }}
                    >
                        <Col xs="6" style={{fontWeight: "bold", fontSize: "24px"}}>
                            {name}
                        </Col>
                        <Col xs="6"  style={{fontWeight: "bold", fontSize: "24px", textAlign: "right"}}>
                            {ratesValue}
                        </Col>
                    </Col>
                    <Col style={{padding: "10px", marginLeft: "20px"}}>
                    {`1 USD = ${name} ${nowRates}`}
                    </Col>
                </Col>
                <Col style={{ alignItems: "stretch", alignSelf: "center", textAlign: "center"}}>
                    <Button style={{width: "100%"}} onClick={() => this.props.removeRates(name)}>Remove</Button>
                </Col>
            </Col>
        );
    }

}

export default DisplayCurrency;

const styles = {
    boxCurrency : {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        border: "1px black solid",
        borderRadius: "0.5em",
        margin: "5px",
        padding: "10px"
    }
}