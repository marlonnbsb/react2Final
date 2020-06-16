import React from "react";
import Geocoder from 'react-native-geocoder'
import Geolocation from "@react-native-community/geolocation";

export const getLocation = async () => {
  return new Promise((resolve, reject) => {
    const onReciveLocation = (geolocation) => {
      console.log('getLocation ', geolocation)
      resolve(geolocation);
    };

    Geolocation.getCurrentPosition(onReciveLocation, (error) => {
      console.log('getLocation error',error);
      reject();
    })

  })
} 

export const filterByCountry = async (movies, geolocation) => {  
  const location = await Geocoder.geocodePosition({
    lat: geolocation.coords.latitude,
    lng: geolocation.coords.longitude,
  });

// console.log('location', location)

  const nacional = movies.filter((item, index) => {
    const countries = item.Country.split(',');
    console.log('countries', countries);

    return countries.some((item, index) => {
      console.log('item', item);
      console.log('location[0].country', location[0].country);
      console.log('location[0].countryCode', location[0].countryCode);
      return item === location[0].country || item === location[0].countryCode;
    })
  });
  console.log('nacional', nacional);
  return nacional;

}


// return (isYourCountry = 
    //   item.Country.indexOf(location[0].country) !== -1 ||
    //   item.Country.indexOf(location[0].countryCode) !== -1);


// const MovieFilter = () => {



//   const getGeo = () => {
//     return new Promise((resolve, reject) => {
//       Geolocation.getCurrentPosition(
//         (success) => {
//           console.log(success);
//           resolve(success);
//         },
//         (erro) => {
//           reject(erro);
//         }
//       );
//     });
//   };

//   getGeo();

//   return <View></View>;
// };

// export default MovieFilter;
