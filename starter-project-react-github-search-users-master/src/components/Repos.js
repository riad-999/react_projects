import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {
  const {repos} = React.useContext(GithubContext);

  const languages = repos.reduce((acc,repo) => {
    const {language, stargazers_count} = repo;
    if(language){
      if(acc[language]){
        acc[language].value++;
        acc[language].stars += stargazers_count 
      }
      else{
        acc[language] = {
          label : language,
          value : 1,
          stars: stargazers_count
        };
      }
    }
    return acc;
  },{}); 
  // most stars and languages
  const top5Used = Object.values(languages)
  .sort((a,b) => b.value - a.value)
  .slice(0,5);
  const top5Popular = Object.values(languages)
  .sort((a,b) => b.stars - a.stars)
  .slice(0,5).map(item => {
    const {label,stars} = item;
    return {
      label,
      value:stars
    };
  });
  //stars, forks
  const stars = repos.map(repo => {
    const {name,stargazers_count} = repo;
    return {
      label: name,
      value: stargazers_count
    }
  }).sort((a,b) => b.value - a.value)
  .slice(0,5);
  const forks = repos.map(repo => {
    const {name,forks} = repo;
    return {
      label: name,
      value: forks
    }
  }).sort((a,b) => b.value - a.value)
  .slice(0,5);

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={top5Used} />
        <Column3D data={stars} />
        <Doughnut2D data={top5Popular} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
