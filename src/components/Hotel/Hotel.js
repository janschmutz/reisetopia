import React, {Component} from 'react';
import './Overview.css';

export default class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: {}
        };
    }
    componentDidMount() {
        console.log("Overview rendered");
    }
    render() {
        return (
            <h1>Overview</h1>
        )
    }
}


