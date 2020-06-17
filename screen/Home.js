import React, { useState, useEffect } from 'react';

import {StatusBar, Dimensions} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Movies from '../components/Movies';
import {getLocation, filterByCountry} from '../screen/MovieFilter'
import { ProfileContext } from '../context/ProfileContext';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [nationalMovies, setNationalMovies] = useState([]);

    getResumeMovie = (user) => {
      const moviesresumeJson = require('../assets/moveisToResume.json');
      return moviesresumeJson[user];
    };

    useEffect(() => {
      const loadindMovies = async () => {
        const moviesJson = require('../assets/Movies.json');
        const position = await getLocation();
        const nationalCountries = await filterByCountry(moviesJson, position);
        setNationalMovies(nationalCountries);

        const nationalCountriesTitles = nationalCountries.map(
          (item, index) => item.Title
        )

        moviesWithoutNationals = moviesJson.filter((item, index) => {
          return !nationalCountriesTitles.includes(item.Title)
        })

        setMovies(moviesWithoutNationals);

      };
      loadindMovies();
    }, [])


  return (
    <ProfileContext.Consumer>
      {(info) => (
        <>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <Container>
            <Poster source={require('../assets/poster.jpg')}>
              <Gradient
                locations={[0, 0.2, 0.6, 0.93]}
                colors={[
                  'rgba(0,0,0,0.5)',
                  'rgba(0,0,0,0.0)',
                  'rgba(0,0,0,0.0)',
                  'rgba(0,0,0,1)',
                ]}>
                <Header />
                <Hero />
              </Gradient>
            </Poster>
            <Movies label="Recomendados" data={movies} />
            <Movies label="Nacionais" data={nationalMovies} />
            <Movies label={`Continuar assistindo como ${info.user}`} data={getResumeMovie(info.user)} />
          </Container>
        </>
      )}
    </ProfileContext.Consumer>
  );
};

export default Home;
