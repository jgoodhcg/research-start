import React, { Component } from 'react';
import { Card, CardHeader} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';

class Database extends Component {
    render() {
        let db = this.props.db
        return (
            <Card>
                <CardHeader
                    avatar={<i className="material-icons">storage</i>}
                    title={db.Name}
                    subtitle={db.Description}
                />
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton href={db.URL}>
                        <i className="material-icons">arrow_forward</i>
                    </IconButton>
                </div>
            </Card>

        )
    }
}

export default Database