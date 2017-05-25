import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class ErrorPage extends Component {
    render() {
        return (
            <div className="content" style={{ padding: "0.5em" }}>
                <Card>
                    <CardText>There was an error accessing the requested subject,
                        please refer to the list of available subject
                    </CardText>
                     <FlatButton
                        alt="available_subject_list"
                        label="Subject List"
                        href="/"
                        fullWidth
                        backgroundColor="#0065a4"
                        labelStyle={{color: "white"}}
                    />

                </Card>
            </div>
        )
    }
}

export default ErrorPage