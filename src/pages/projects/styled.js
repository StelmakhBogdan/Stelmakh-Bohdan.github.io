import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  padding: 5px;
  background-color: aliceblue
  //background-color: #ebebeb;
`;

export const ProjectsCatalog = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  text-align: center;
  grid-column-gap: 5px;
  grid-row-gap: 20px;
  @media screen and (max-width: 720px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
  }
  @media screen and (max-width: 500px) {
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
  }
`;

export const ProjectsList = styled.li`
  padding: 0 5px 0 5px;
`;

export const TitleLink = styled.h3`
  color: #423d3d;
  font-size: 20px;
  @media screen and (max-width: 500px) {
    font-size: small;
  }
`;

export const Link = styled.a`
   :hover {
    text-decoration: none;
   }
`;

export const Iframe = styled.iframe`
  max-width: 100%;

  @media screen and (max-width: 500px){
    height: 250px;
    }
`;