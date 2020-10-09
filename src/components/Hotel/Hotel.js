import React, {Component} from 'react';
import './Hotel.css';

export default class Hotel extends Component {
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
                <h3>{this.props.hotel.name}</h3>
                <h4>{this.props.hotel.address}</h4>
                {this.props.hotel.images.length > 0 ? <div className="previewImg" style={{ backgroundImage: `url(${this.props.hotel.images[0].url})` }}/> : <div className="previewImg">kein Bild verfügbar</div>}
                <button>zur Detailansicht</button>
            </div>
        )
    }
}


