var dateObject = new Date();
var year = dateObject.getFullYear();
var month = String(dateObject.getMonth()).padStart(2,'0');
var URL = 'https://climate-api.open-meteo.com/v1/climate?latitude=52.52&longitude=13.41&start_date=1950-01-01&end_date=2050-12-31&models=NICAM16_8S&wind_speed_unit=mph&daily=relative_humidity_2m_mean,relative_humidity_2m_max,relative_humidity_2m_min'

fetch (URL)
      .then ( (response) => {
        return response.json();
      })
      .then ((data) => {
        console.log(data);
    
      })