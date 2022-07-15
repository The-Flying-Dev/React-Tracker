import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';
import styles from './Chart.module.css';

//pass in data object and destructure
const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  //initial state
  const [dailyData, setDailyData] = useState([]);

  // side effect to fetch data with empty dependency array 
  // this hook will only run once after the component is rendered

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  
  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(255, 174, 0, 0.904)', 'rgba(0, 255, 0, 0.726)', 'rgba(255, 0, 0, 0.89)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{                               
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: 'rgba(255, 174, 0, 0.904)',            
            fill: true,
          }, {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'rgba(255, 0, 0, 0.89)',
            backgroundColor: 'rgba(255, 0, 0, 0.89)',
            fill: true,
          },  {
            data: dailyData.map(({ recovered }) => recovered),
            label: 'Recovered',
            borderColor: 'rgba(0, 255, 0, 0.726)',
            backgroundColor: 'rgba(0, 255, 0, 0.726)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );

  // returning whichever chart is chosen
  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  );
};

export default Chart;
