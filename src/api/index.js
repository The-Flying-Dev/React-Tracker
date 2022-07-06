import axios from "axios";

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const { data : { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

    //immediately using the object data, no need to create another variable
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {

  }
}