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
        console.log("Hotel rendered");
    }
    render() {
        return (
            <div>
                {this.props.hotels.map((hotel) => {
                    return <p>htel</p>
                })}
            </div>
        )
    }
}


