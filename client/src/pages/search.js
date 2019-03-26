import React, { Component } from "react";
import googleApi from "../utils/googleApi";
i
import dbApi from "../api/dbApi";

class Search extends Component {
    state = {
        searchedBooks: [],
        title: "",
        error: ""
    };

    handleInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleForm = event => {
        //SEARCh
        event.preventDefault();
        googleApi.searchBook(this.state.title).then(res => {
            console.log(res.data.items);
            this.setState({ searchedBooks: res.data.items, error: ""});
        }).catch(err=> {
            this.setState({error: err.message, searchedBooks: []});
        });
    };

    saveBook = dbEntry => {
        dbApi.saveBook(dbEntry);
    };

    //thrown errors but cant find anything here also need to handle th actual search..
