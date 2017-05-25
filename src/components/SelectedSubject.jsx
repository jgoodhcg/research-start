import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Database from './Database'

class SelectedSubject extends Component {
    render() {
        let subject = this.props.subject
        return (
            <div className="content" style={{ padding: "0.5em" }}>
                <Card style={{ backgroundColor: "#003D65" }}>
                    <CardTitle
                        title={subject.Code}
                        titleColor="white"
                        subtitle={subject.Subject}
                        subtitleColor="white"
                    />
                    <FlatButton
                        alt={subject.Code + "_guide"}
                        label="Guide"
                        href={subject.SubjectGuide}
                        fullWidth
                        backgroundColor="#0065a4"
                    />

                </Card>

                <Card>
                    <CardHeader
                        alt={subject.Code + "_librarian_details"}
                        title={subject.Librarian.Name}
                        subtitle="Librarian"
                        avatar={subject.Librarian.Photo}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                </Card>
                <Database db={subject.Database1} />
                <Database db={subject.Database2} />
                <Database db={subject.Database3} />
            </div >)
    }
}

export default SelectedSubject