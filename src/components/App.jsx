import React, { Component } from 'react';
import { connect } from 'react-redux';
import { libraryDataFetch, search } from '../actions/';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import * as _ from 'lodash';
import Divider from 'material-ui/Divider';
import './../App.css';

class App extends Component {
    componentDidMount() {
        this.props.fetchData('researchstart.json');
    }
    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <div className="app-container">
                <AppBar
                    iconElementLeft={<div>GVSU</div>}
                    title="Research Start"
                />
                <div className="content" style={{ padding: "0.5em" }}>
                    <Card>
                        <i className="material-icons">search</i>
                        <TextField
                            alt="subject_search_feild"
                            hintText="Search Subject"
                            onChange={(e, val)=>{this.props.search(val)}} />
                    </Card>
                    <Card style={{ marginTop: "0.5em" }}>
                        <List alt="subject_list">
                            {_(this.props.data)
                                .keys()
                                .sortBy()
                                .map((sub) => {
                                    let fullSub = this.props.data[sub]
                                    return (
                                        <div key={sub} >
                                            <ListItem
                                                alt={"click_for_" + sub + "_info"}
                                                primaryText={sub}
                                                secondaryText={<p>{fullSub.Subject}</p>}
                                                secondaryTextLines={2}
                                            />
                                            <Divider />
                                        </div>
                                    )
                                })
                                .value()
                            }
                        </List>
                    </Card>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.libraryData,
        hasErrored: state.dataHasErrored,
        isLoading: state.dataIsLoading,
        search: state.search,
        selected: state.selected
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(libraryDataFetch(url)),
        search: (term) => dispatch(search(term))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
