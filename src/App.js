import React,{Component} from 'react';
import {Cards, Chart, CountryPicker} from './components';
import {fetchData} from './Api';
import coronaImage from './images/image.png';
import './App.css';
import styles from './App.module.css';

class App extends Component {

  state ={
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetcheData = await fetchData();
    this.setState({ data: fetcheData });
  }

  handleCountryChange = async (country) => {
    const fetcheData = await fetchData(country);
    this.setState({ data: fetcheData, country: country });
  }

  render() {
    const { data, country } = this.state;
    return(
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;
