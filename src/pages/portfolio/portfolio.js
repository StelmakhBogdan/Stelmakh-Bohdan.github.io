import React from 'react';

import {ImageData} from '../../api/image-data';
import {
  Main,
  Gallery,
  GalleryContent,
  DownloadBook,
  GalleryImg
} from './styled';

const Portfolio = () => (
  <Main>
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
    <Gallery>
      {ImageData.map(image => (
          <GalleryContent key={image.id}>
            <GalleryImg src={image.img} alt="img"/>
          </GalleryContent>
        )
      )}
    </Gallery>

  </Main>
);

export default Portfolio;