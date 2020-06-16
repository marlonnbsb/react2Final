import Geocoder from 'react-native-geocoder'
import Geolocation from "@react-native-community/geolocation";

export const getLocation = async () => {
  return new Promise((resolve, reject) => {
    const onReciveLocation = (geolocation) => {
      resolve(geolocation);
    };

    Geolocation.getCurrentPosition(onReciveLocation, (error) => {
      reject();
    })

  })
} 

export const filterByCountry = async (movies, geolocation) => {  
  const location = await Geocoder.geocodePosition({
    lat: geolocation.coords.latitude,
    lng: geolocation.coords.longitude,
  });

  const nacional = movies.filter((item, index) => {
    const countries = item.Country.split(',');
    return countries.some((item, index) => {
      return item === location[0].country || item === location[0].countryCode;
    })
  });
  return nacional;
}

