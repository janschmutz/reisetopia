import React, {Component} from 'react';
import Hotel from '../Hotel/Hotel';
import './App.css';
import HotelList from "../HotelList/HotelList";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: {},
            hotels: [],
            filteredHotels: [],
        };
    }

    searchOnChanche = (e) =>{
        this.setState({filteredHotels: this.state.hotels});
        const typed = e.target.value.toLowerCase();
        const filteredHotels = this.state.hotels.filter((hotel)=>{
            if(hotel.name.toLowerCase().includes(typed.toLowerCase())){
                    return hotel
            }

        });
        this.setState({filteredHotels: filteredHotels});
    }

    componentDidMount() {
        fetch("https://api.reisetopia.de/v3/recruiting/hotels")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        hotels: result.result,
                        filteredHotels: result.result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }
    render() {
        return (
            <div>
                <h1>APP</h1>
                <input type="text" placeholder="Enter Hotel Name:" onChange={(e)=>this.searchOnChanche(e)} />
                <HotelList hotels={this.state.filteredHotels}/>
            </div>
        )
    }
}


