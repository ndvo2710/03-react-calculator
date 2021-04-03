import React, { Component } from 'react'

const initialState = {
    result: 0,
    currentValue: "0",
    displayScreenValue: "0",
    lastOperator: "+",
    opDuplicatingCount: 0
}

export default class Calculator extends Component {
    state = initialState;

    keyPressHandler = (buttonValue) => {
        console.log(buttonValue);
        // @=CE $=C
        if ("@$".indexOf(buttonValue) !== -1) {
            if (buttonValue === "@") {
                this.setState(initialState);
            }
            if (buttonValue === "$") {
                this.setState({
                    currentValue: "0",
                    displayScreenValue: "0"
                });
            }
        } else {
            if ("+-*÷=".indexOf(buttonValue) === -1) {
                if (this.state.currentValue === "0") {
                    this.setState({
                        currentValue: buttonValue,
                        displayScreenValue: buttonValue
                    });
                } else {
                    this.setState({
                        currentValue: this.state.currentValue + buttonValue,
                        displayScreenValue: this.state.currentValue + buttonValue
                    })
                }
                this.setState({
                    opDuplicatingCount: 0
                })
            } else {
                if (this.state.opDuplicatingCount < 1) {
                    let tempResult;
                    if ("+-*÷=".indexOf(this.state.lastOperator) !== -1) {
                        switch (this.state.lastOperator) {
                            case "+":
                                tempResult = parseFloat(this.state.result) + parseFloat(this.state.currentValue);
                                break;
                            case "-":
                                tempResult = parseFloat(this.state.result) - parseFloat(this.state.currentValue);
                                break;
                            case "*":
                                tempResult = parseFloat(this.state.result) * parseFloat(this.state.currentValue);
                                break;
                            default:
                                tempResult = parseFloat(this.state.result) / parseFloat(this.state.currentValue);
                        }
                        this.setState({
                            currentValue: "0",
                            result: tempResult,
                            displayScreenValue: tempResult
                        })
                    }

                    this.setState({
                        opDuplicatingCount: this.state.opDuplicatingCount + 1
                    })
                }
                this.setState({
                    lastOperator: buttonValue
                })
            }
        }

    }

    componentDidUpdate = () => {
        console.log(JSON.stringify(this.state));
    }


    render() {
        const styleCalculator = {
            border: '1px solid #ccc',
            borderRadius: '5px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -80%)',
            width: '400px',
            backgroundColor: "pink",
        };

        const styleScreen = {
            width: "100%",
            height: "80px",
            border: "none",
            backgroundColor: "#252525",
            color: "#fff",
            textAlign: "right",
            paddingRight: "20px",
            paddingLeft: "10px",
            fontSize: "4rem",
        }

        const styleBtn = {
            height: "60px",
            fontSize: "2rem !important",
        };

        const styleCalculatorKeys = {
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridGap: "20px",
            padding: "20px",
        }

        const styleEqualSign = {
            height: "98%",
            gridArea: "3 / 5 / 5 / 6",
        }

        const styleZeroBtn = {
            gridArea: "4 / 1 / 4 / 3",
        }

        return (
            <div className="calculator card" style={styleCalculator}>
                <input type="text" className="calculator-screen z-depth-1 text-right" value={this.state.displayScreenValue} disabled style={styleScreen} />
                    <div className="calculator-keys" style={styleCalculatorKeys}>
                    <button type="button" onClick={(e) => this.keyPressHandler(e.target.value)} style={styleBtn} value="7" className="btn btn-light waves-effect">7</button>
                    <button type="button" onClick={(e) => this.keyPressHandler(e.target.value)} style={styleBtn} value="8" className="btn btn-light waves-effect">8</button>
                    <button type="button" onClick={(e) => this.keyPressHandler(e.target.value)} style={styleBtn} value="9" className="btn btn-light waves-effect">9</button>
                    <button type="button" onClick={(e) => this.keyPressHandler(e.target.value)} style={styleBtn} className="operator btn btn-info" value="÷">/</button>
                    <button type="button" onClick={(e) => this.keyPressHandler(e.target.value)} style={styleBtn} className="all-clear function btn btn-danger btn-sm" value="@">CE</button>

                    <button type="button" onClick={(e) => this.keyPressHandler(e.target.value)} style={styleBtn} value="4" className="btn btn-light waves-effect">4</button>
                    <button type="button" onClick={(e) => this.keyPressHandler(e.target.value)} style={styleBtn} value="5" className="btn btn-light waves-effect">5</button>
                    <button type="button" onClick={(e) => this.keyPressHandler(e.target.value)} style={styleBtn} value="6" className="btn btn-light waves-effect">6</button>
                    <button type="button" onClick={(e) => this.keyPressHandler(e.target.value)} style={styleBtn} className="operator btn btn-info" value="*">×</button>
                    <button type="button" onClick={(e) => this.keyPressHandler(e.target.value)} style={styleBtn} className="all-clear function btn btn-danger btn-sm" value="$">C</button>

                    <button type="button" onClick={(e) => this.keyPressHandler(e.target.value)} style={styleBtn} value="1" className="btn btn-light waves-effect">1</button>
                    <button type="button" onClick={(e) => this.keyPressHandler(e.target.value)} style={styleBtn} value="2" className="btn btn-light waves-effect">2</button>
                    <button type="button" onClick={(e) => this.keyPressHandler(e.target.value)} style={styleBtn} value="3" className="btn btn-light waves-effect">3</button>
                    <button type="button" onClick={(e) => this.keyPressHandler(e.target.value)} style={styleBtn} className="operator btn btn-info" value="-">-</button>

                    <button type="button" onClick={(e) => this.keyPressHandler(e.target.value)} style={styleZeroBtn} value="0" className="btn btn-light waves-effect">0</button>
                    <button type="button" onClick={(e) => this.keyPressHandler(e.target.value)} style={styleBtn} className="decimal function btn btn-secondary" value=".">.</button>
                    <button type="button" onClick={(e) => this.keyPressHandler(e.target.value)} style={styleBtn} className="operator btn btn-info" value="+">+</button>

                    <button type="button" onClick={(e) => this.keyPressHandler(e.target.value)} style={styleEqualSign} className="equal-sign operator btn btn-primary" value="=">=</button>

                    </div>
            </div>
        )
    }
}
