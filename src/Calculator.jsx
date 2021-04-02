import React, { Component } from 'react'

export default class Calculator extends Component {


    render() {
        const styleCalculator = {
            border: '1px solid #ccc',
            borderRadius: '5px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
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
            fontSize: "2rem!important",
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
            <div className="container-fluid bg-danger">
                <div className="container">
                    <h1 className="display-4">Calculator</h1>
                    <div className="jumbotron-fluid calculator card" style={styleCalculator}>
                        <input type="text" class="calculator-screen z-depth-1 text-right" value="0" disabled style={styleScreen} />
                        <div className="calculator-keys" style={styleCalculatorKeys}>
                            <button type="button" style={styleBtn} value={7} className="btn btn-light waves-effect">7</button>
                            <button type="button" style={styleBtn} value={8} className="btn btn-light waves-effect">8</button>
                            <button type="button" style={styleBtn} value={9} className="btn btn-light waves-effect">9</button>
                            <button type="button" style={styleBtn} className="operator btn btn-info" value="/">/</button>
                            <button type="button" style={styleBtn} className="all-clear function btn btn-danger btn-sm" value="all-clear">CE</button>

                            <button type="button" style={styleBtn} value={4} className="btn btn-light waves-effect">4</button>
                            <button type="button" style={styleBtn} value={5} className="btn btn-light waves-effect">5</button>
                            <button type="button" style={styleBtn} value={6} className="btn btn-light waves-effect">6</button>
                            <button type="button" style={styleBtn} className="operator btn btn-info" value="*">×</button>
                            <button type="button" style={styleBtn} className="all-clear function btn btn-danger btn-sm" value="all-clear">C</button>

                            <button type="button" style={styleBtn} value={1} className="btn btn-light waves-effect">1</button>
                            <button type="button" style={styleBtn} value={2} className="btn btn-light waves-effect">2</button>
                            <button type="button" style={styleBtn} value={3} className="btn btn-light waves-effect">3</button>
                            <button type="button" style={styleBtn} className="operator btn btn-info" value="-">-</button>

                            <button type="button" style={styleZeroBtn} value={0} className="btn btn-light waves-effect">0</button>
                            <button type="button" style={styleBtn} className="decimal function btn btn-secondary" value=".">.</button>
                            <button type="button" style={styleBtn} className="operator btn btn-info" value="+">+</button>

                            <button type="button" style={styleEqualSign} className="equal-sign operator btn btn-primary" value="=">=</button>

                        </div>
                    </div>
                </div>
            </div >

        )
    }
}
