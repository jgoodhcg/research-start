import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';

class Librarian extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded });
    };

    handleToggle = (event, toggle) => {
        this.setState({ expanded: toggle });
    };

    handleExpand = () => {
        this.setState({ expanded: true });
    };

    handleReduce = () => {
        this.setState({ expanded: false });
    };
    render() {
        let librarian = this.props.librarian,
            code = this.props.code
        return (
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <CardHeader
                    alt={code + "_librarian_details"}
                    title={librarian.Name}
                    subtitle="Librarian"
                    avatar={librarian.Photo}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable>
                    <List>
                        <ListItem
                            leftIcon={<i className="material-icons">email</i>}
                            primaryText={librarian.Email}
                            secondaryText="Email"
                        />
                        <ListItem
                            leftIcon={<i className="material-icons">phone</i>}
                            primaryText={librarian.Phone}
                            secondaryText="Phone"
                        />
                         <ListItem
                            leftIcon={<i className="material-icons">business_center</i>}
                            primaryText={librarian.Office}
                            secondaryText="Office"
                        />
   
                    </List>
                </CardText>
            </Card>

        )
    }
}

export default Librarian