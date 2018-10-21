import './index.css';

class View extends React.Component {

  constructor () {
    super();
    this.state = {
      treeName: '',
      treeType: '',
      Latitude: '',
      Longitude: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange (event) {
    // check it out: we get the event.target.name (which will be either "treeNam" or "treeType")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + JSON.stringify(this.state));
    event.preventDefault();
  }
  
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
      
        <label>Name</label>
        <input type="text" value={this.state.treeName} name="treeName" onChange={this.handleChange} /><br></br>
        
        <label>Tree Type</label>
        <input type="text" value={this.state.treeType} name="treeType" onChange={this.handleChange} /><br></br>

        <label>Latitude</label>
        <input type="text" value={this.state.latitude} name="latitude" onChange={this.handleChange} /><br></br>

        <label>Longitude</label>
        <input type="text" value={this.state.longitude} name="longitude" onChange={this.handleChange} /><br></br>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
  


// ========================================

ReactDOM.render(
  <View />,
  document.getElementById('root')
);

