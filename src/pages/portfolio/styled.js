import styled from 'styled-components';

export const Main = styled.main`
  background-color: aliceblue;
`;

export const Gallery = styled.div`
  padding: .5vw;
  font-size: 0;
  display: flex;
  flex-wrap: wrap;
  flex-flow: row wrap;
`;

export const GalleryContent = styled.div`
  flex: auto;
  width: 20%;
  margin: .25vw;
  
  //@media screen and (min-width: 1920px) {
  //  flex: auto;
  //  width: 400px;
  //}
  @media screen and (max-width: 645px) {
    flex: auto;
    width: 40%;
  }
  //@media (max-width: 375px) {
  //  flex: auto;
  //  width: 155px;
  //}
`;

export const DownloadBook = styled.div`
  text-align: center;
  font-weight: bold;
  color: dimgrey;
  padding: 1rem 0px;
`;

export const DownloadParagarph = styled.p`
  margin: 0px;
`;

export const GalleryImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;