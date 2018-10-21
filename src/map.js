
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// export class MapContainer extends Component {
//     constructor(){
//         super();
//         this.state = {
//             showingInfoWindow: false,
//             activeMarker: {},
//             selectedPlace: {},
//             trees: []
//         }
//     }
//     componentDidMount(){
//         fetch('/api/getTrees').then(response => response.json()).then(data => console.log(data));
//         // this.setState({
//         //   trees: [
//         //       {lat: 33.8, lng: -84.396, planter:'Cameron', name:'Cool tree', icon: 'http://maps.google.com/mapfiles/ms/micons/tree.png'},
//         //       {lat: 33.8, lng: -84.392, planter:'Randy', name:'Lame tree'},
//         //       {lat: 33.8, lng: -84.398, planter:'Sarah', name:'Yeah uh'},],
//         // });
//     }

//     onMarkerClick = (props, marker, e) =>
//         this.setState({
//         selectedPlace: props,
//         activeMarker: marker,
//         showingInfoWindow: true
//     });
 
//     onMapClicked = (props) => {
//         if (this.state.showingInfoWindow) {
//         this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//         })}
//     };

//     render() {
//         return (
//             <Map
//               styles={darkStyle}
//               google={this.props.google}
//               onClick={this.onMapClicked}
//               initialCenter={{
//                 lat: 33.775, //Georgia Tech's campus
//                 lng: -84.396}} 
//               zoom={15}>

//             {this.state.trees.map((trees, i) =>{
//               return(
//                 <Marker
//                   onClick={this.onMarkerClick}
//                   icon={trees.icon}
//                   lat={trees.lat}
//                   lng={trees.lng}
//                   name={trees.name}
//                   planter={trees.planter}
//                 />
//               )
//             })} 
            

//             <InfoWindow
//               marker={this.state.activeMarker}
//               visible={this.state.showingInfoWindow}>
//               <div>
//                 <p>Name: {this.state.selectedPlace.name}</p>
//                 <p>Planter: {this.state.selectedPlace.planter}</p>
//               </div>
//             </InfoWindow>
//             </Map>
//         );
//     }
// }

// const darkStyle = [
//     {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
//     {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
//     {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
//     {
//       featureType: 'administrative.locality',
//       elementType: 'labels.text.fill',
//       stylers: [{color: '#d59563'}]
//     },
//     {
//       featureType: 'poi',
//       elementType: 'labels.text.fill',
//       stylers: [{color: '#d59563'}]
//     },
//     {
//       featureType: 'poi.park',
//       elementType: 'geometry',
//       stylers: [{color: '#263c3f'}]
//     },
//     {
//       featureType: 'poi.park',
//       elementType: 'labels.text.fill',
//       stylers: [{color: '#6b9a76'}]
//     },
//     {
//       featureType: 'road',
//       elementType: 'geometry',
//       stylers: [{color: '#38414e'}]
//     },
//     {
//       featureType: 'road',
//       elementType: 'geometry.stroke',
//       stylers: [{color: '#212a37'}]
//     },
//     {
//       featureType: 'road',
//       elementType: 'labels.text.fill',
//       stylers: [{color: '#9ca5b3'}]
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'geometry',
//       stylers: [{color: '#746855'}]
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'geometry.stroke',
//       stylers: [{color: '#1f2835'}]
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'labels.text.fill',
//       stylers: [{color: '#f3d19c'}]
//     },
//     {
//       featureType: 'transit',
//       elementType: 'geometry',
//       stylers: [{color: '#2f3948'}]
//     },
//     {
//       featureType: 'transit.station',
//       elementType: 'labels.text.fill',
//       stylers: [{color: '#d59563'}]
//     },
//     {
//       featureType: 'water',
//       elementType: 'geometry',
//       stylers: [{color: '#17263c'}]
//     },
//     {
//       featureType: 'water',
//       elementType: 'labels.text.fill',
//       stylers: [{color: '#515c6d'}]
//     },
//     {
//       featureType: 'water',
//       elementType: 'labels.text.stroke',
//       stylers: [{color: '#17263c'}]
//     }
// ];

// export default GoogleApiWrapper({
//   apiKey:"AIzaSyDYeOFzCI0SZzpkZ-gjSNtZ6sfa6nKF79Q"
// })(MapContainer)