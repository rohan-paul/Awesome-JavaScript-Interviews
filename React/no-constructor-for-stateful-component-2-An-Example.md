### An example where, for my state-full component, where I am indeed changing the state of the component, but NOT using the constructor.

#### An use-case  The below parent component (FetchWeather) only fetches the weather and update the state with the fetched data. Andthen the passes that state down as props to the child RenderWeather component.

This code is slight modification from the code in [https://github.com/Kennypee/Weather-Scanner](https://github.com/Kennypee/Weather-Scanner) - that just fetches the weather and renders it.

```js
import React from "react";
import RenderWeather from "./components/RenderWeather";

class FetchWeather extends React.Component {

    state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    error: undefined
}
  // getWeather is a method we'll use to make the api call
  getWeather = async () => {

    // the city and the country is hardcoded here
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=8d2de98e089f1c28e1a22fc19a24ef04`);

    const response = await api_call.json();

    console.log(response);


      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
  }

  componentDidMount() {
    this.getWeather();
  }

  render() {
    return (
            <div className="col-xs-7 form-container">

                <RenderWeather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                error={this.state.error}
                />
            </div>
      </div>

    )
  }
}
export default FetchWeather;
```

#### Now the child RenderComponent, which is a stateless component that only renders that data.

```js
import React from "react";

class RenderWeather extends React.Component{
    render(){
        return(
            <div className="weather-info">
                {
                    this.props.country && this.props.city && <p className="weather__key">Location:
                        <span className="weather__value">  {this.props.city}, {this.props.country}</span>
                    </p>
                }

                {
                    this.props.temperature && <p className="weather__key">Temperature:
                        <span className="weather__value">  {this.props.temperature}</span>
                    </p>
                }

                {
                    this.props.humidity && <p className="weather__key">Humidity:
                        <span className="weather__value">  {this.props.humidity}</span>
                    </p>
                }

                {
                    this.props.error && <p className="weather__error">{this.props.error}</p>
                }
            </div>
        )
    }
}

export default RenderWeather;
```

### Further Reading
https://www.robinwieruch.de/react-state-without-constructor/?fbclid=IwAR2tELzjRnsNxovZ43PL6GjunhUPZ6kSac46S1ypj5ltspEIiJbOt-Vs1GA