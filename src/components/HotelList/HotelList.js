import React, {Component} from 'react';
import './HotelList.css';
import Hotel from "../Hotel/Hotel";

export default class HotelList extends Component {
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
                    return <Hotel hotel={hotel}/>
                })}
            </div>
        )
    }
}


