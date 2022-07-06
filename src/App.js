import React, { useState } from 'react';
import { Cards, Chart, CountryPicker } from './components'; //imports directly from components/index.js
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {

  //state declaration with empty object inside class
  state = {
    data: {},
  }

  //first lifecycle method
  async componentDidMount() {
    const fetchedData = await fetchData();

    //where the current State is being updated 
    this.setState({ data: fetchedData });
  }
  
  render() {
    //destructure the data object then pass it as a prop to the Card component
    const { data } = this.state;

    return (                      
      <div className={styles.container}> {/* dynamic styles */}
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}
export default App;
