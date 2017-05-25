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
import { BrowserRouter, Route, Link } from 'react-router-dom'
import SelectedSubject from './SelectedSubject'
import ErrorPage from './ErrorPage'
import './../App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }
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

            <BrowserRouter>
                <div className="app-container">
                    <AppBar
                        iconElementLeft={<div>GVSU</div>}
                        title="Research Start"
                    />
                    <Route exact path="/" render={props => {
                        return (
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
                                                            onClick={(e) => {
                                                                this.props.makeSelection(sub.Code)
                                                                props.history.push("/" + sub.Code)
                                                            }}
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
                        )
                    }} />
                    <Route path="/:code" render={props => {
                        let code = props.match.params.code,
                            selected = this.props.selected,
                            numberOfKeys = _(selected).keys().value().length

                        this.state.code = code; // local component state see componentDidUpdate()

                        console.log({numberOfKeys, selected})

                        if (numberOfKeys > 1) {
                            return (<SelectedSubject subject={this.props.selected} />)
                        } else {
                            return (<ErrorPage subject={this.props.selected} />)
                        }
                    }} />
                </div >

            </BrowserRouter>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        // for fresh requests to a specific subject route
        // this will make a selection and update state after the data has loaded
        // when the request isn't a valid code then the selected object in the 
        // state will only have one key/val {Code: requestedSubject}
        // its up to the component to render the error
        let code = prevState.code,
            selected = (code === this.props.selected.Code)

        if (!selected && this.props.hasLoaded) { this.props.makeSelection(code) }
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.libraryData,
        hasErrored: state.dataHasErrored,
        isLoading: state.dataIsLoading,
        hasLoaded: state.dataHasLoaded,
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
