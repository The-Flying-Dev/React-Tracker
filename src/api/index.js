import axios from "axios";

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const { data : { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

    //immediately using the object data, no need to create another variable
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return(error);
  }
}


export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');

    return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
  } catch (error) {
    return error;
  }
};
