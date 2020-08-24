import React from 'react';
import styled from 'styled-components';

import {ImageData} from '../../api/image-data';

const Portfolio = () => (
  //response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
  <div className="jumbotron">
    <DownloadBook>
      <p>
        Download Portfolio
        &nbsp;
        <a href="https://drive.google.com/file/d/1pEZVcNWfxOromNt-w4qV6QEquFfCToGD/view?usp=sharing"
           className="btn btn-secondary"
        >
          <i className="fa fa-download" aria-hidden="true"/>
        </a>
      </p>
    </DownloadBook>

    {ImageData.map(image => (
        <Gallery  key={image.id}>
          <GalleryContent>
            <img src={image.img} alt="img"/>
          </GalleryContent>
        </Gallery>
      )
    )}
  </div>
);

export default Portfolio;

const Gallery = styled.div`
  padding: .5vw;
  font-size: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-flow: row wrap;
`;

const GalleryContent = styled.div`
  flex: auto;
  width: 300px;
  margin: .5vw;
`;

const DownloadBook = styled.div`
  text-align: center;
  font-weight: bold;
  color: dimgrey;
`;