import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

export class MapContainer extends Component {
    constructor(){
        super();
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            trees: []
        }
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });
 
    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
        this.setState({
        showingInfoWindow: false,
        activeMarker: null
        })}
    };

    render() {
        return (
            <Map
              styles={darkStyle}
              google={this.props.google}
              onClick={this.onMapClicked}
              initialCenter={{
                lat: 33.775, //Georgia Tech's campus
                lng: -84.396}}
              zoom={15}>
            <Marker
              onClick={this.onMarkerClick}
              planter={'Cameron'}
              name={'Cool tree'}
              icon={'http://maps.google.com/mapfiles/ms/micons/tree.png'}
              position={{lat: 33.775, lng: -84.396}} />
            <Marker
              onClick={this.onMarkerClick}
              planter={'Randy'}
              name={'Lame tree'}
              icon={'http://maps.google.com/mapfiles/ms/micons/tree.png'}
              position={{lat: 33.77, lng: -84.392}} />
            <Marker
              onClick={this.onMarkerClick}
              planter={'Sarah'}
              name={'Yeah uh'}
              icon={'http://maps.google.com/mapfiles/ms/micons/tree.png'}
              position={{lat: 33.773, lng: -84.398}} />

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                <p>Name: {this.state.selectedPlace.name}</p>
                <p>Planter: {this.state.selectedPlace.planter}</p>
              </div>
            </InfoWindow>
            </Map>
        );
    }
}

const darkStyle = [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}]
    }
];

export default GoogleApiWrapper({
  apiKey:"AIzaSyDYeOFzCI0SZzpkZ-gjSNtZ6sfa6nKF79Q"
})(MapContainer)