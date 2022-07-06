import React from 'react';
import { Cards, Chart, CountryPicker } from './components'; //imports directly from components/index.js
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {

  async componentDidMount() {
    const data = await fetchData();

    console.log(data);
  }
  
  render() {
    return (                      
      <div className={styles.container}> {/* dynamic styles */}
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}
export default App;
