import React, { Component } from 'react';
import { connect } from 'react-redux';
import { libraryDataFetch, search, makeSelection } from '../actions/';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import * as _ from 'lodash';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
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
                        <div className="search-container"
                            style={{
                                display: 'flex',
                                flexWrap: "nowrap",
                                alignItems: "center"
                            }}>
                            <i
                                className="material-icons"
                                style={{ margin: "0.3em" }}>
                                search</i>
                            <TextField
                                alt="subject_search_field"
                                hintText="Search Subject"
                                onChange={(e, val) => { this.props.search(val) }} />
                            <FlatButton
                                icon={<i className="material-icons">arrow_forward</i>}
                                onClick={(e) => { this.props.makeSelection() }} />
                        </div>
                    </Card>
                    <Card style={{ marginTop: "0.5em" }}>
                        <List alt="subject_list">
                            {_(this.props.visibleSubjects)
                                .map((sub) => {
                                    return (
                                        <div key={sub.Code} >
                                            <ListItem
                                                alt={"click_for_" + sub.Code + "_info"}
                                                primaryText={sub.Code}
                                                secondaryText={<p>{sub.Subject}</p>}
                                                secondaryTextLines={2}
                                                onClick={(e) => { this.props.makeSelection(sub.Code) }}
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
        selected: state.selected,
        visibleSubjects: state.visibleSubjects
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(libraryDataFetch(url)),
        search: (term) => dispatch(search(term)),
        makeSelection: (code) => dispatch(makeSelection(code))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
