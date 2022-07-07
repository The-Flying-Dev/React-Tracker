import React from 'react';
import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';


import image from './images/image.png';



class App extends React.Component {
  //state declaration with empty object inside class
  state = {
    data: {},
    country: '',    
  }

 

  //initial lifecycle method
  async componentDidMount() {
    const fetchedData = await fetchData();
    //where the current State is being updated    
    this.setState({ data: fetchedData });
  }

 

  //event handler
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }



  render() {
    //destructure the data object then pass it as a prop to the Card component
    const { data, country } = this.state;   

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;