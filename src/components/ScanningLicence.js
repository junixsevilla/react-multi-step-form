import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class ScanningLicence extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        // this.props.values;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Scanning licence (Scan your driver licence )" />
                    <h2>Sorry! <br />The Scanner was stolen yesterday! </h2>
                    <h3>Scan your driver licence</h3>
                    <p>Permission to access your camera access on your device</p>



                    <br />
                    <RaisedButton
                        label="Scan"
                    />
                    <br />
                    <RaisedButton
                        label="Enter driver licence manually"
                        primary={true}
                        style={styles.buttom}
                        onClick={this.continue}
                    />
                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default ScanningLicence

