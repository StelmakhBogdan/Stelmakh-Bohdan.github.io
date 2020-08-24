import React from 'react';

import {
  ProjectsContainer,
  ProjectsCatalog,
  ProjectsList,
  TitleLink,
  Link,
  Iframe
} from './styled';

const Projects = () => (
  <ProjectsContainer>
    <ProjectsCatalog>
      <ProjectsList>
        <Iframe
          width="560"
          height="315" src="https://www.youtube.com/embed/H1eEVYt8m2U"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Tsum"/>
        <Link href="https://tsum.ua/">
          <TitleLink>TSUM Campaign shooting |Fall Winter 2017-2018</TitleLink>
        </Link>
        <p>Video backstage from campaign shooting for TSUM | Fall Winter 2017-2018</p>
      </ProjectsList>
      <ProjectsList>
        <Link href="https://www.socar.com.ua/">
          <Iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5UNKDrFDYXc"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Socar"/>
          <TitleLink>Socar</TitleLink>
        </Link>
        <p>Advertisement for Socar | 2017</p>
      </ProjectsList>
      <ProjectsList>
        <Link href="http://hyperx.gg/AlloyEliteYT">
          <Iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gvCTNd3rLMI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="HyperX"/>
          <TitleLink>HyperX Alloy Elite - ТВОЙ РИТМ</TitleLink>
        </Link>
        <p>Advertisement HyperX Alloy Elite - ТВОЙ РИТМ | 2018</p>
      </ProjectsList>
      <ProjectsList>
        <Link href="">
          <Iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Bqoa-gmtHsw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Seawin"/>
          <TitleLink>Seawin</TitleLink>
        </Link>
        <p>Advertisement for Seawin | 2018</p>
      </ProjectsList>
      <ProjectsList>
        <Link href="http://manufactura.ua/en/">
          <Iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KUZ0WG3amb8"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Manufacture"/>
          <TitleLink>Manufactura Kiev Outlet Village</TitleLink>
        </Link>
        <p>Advertisement for manufactura kiev outlet village | Fall Winter 2017-2018</p>
      </ProjectsList>
      <ProjectsList>
        <Link href="https://tsarsky.com/ua/">
          <Iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BTQRDApTwIs"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Tsarsky"/>
          <TitleLink>TSARSKY</TitleLink>
        </Link>
        <p>Video backstage from Campaign shooting for TSARSKY Resort Kiev | 2018</p>
      </ProjectsList>
      <ProjectsList>
        <Link href="">
          <Iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8C86XnHwN5o"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Bereg"/>
          <TitleLink>Bereg U - Wild Heart</TitleLink>
        </Link>
        <p>Bereg U -Wild Heart Preview | 2017</p>
      </ProjectsList>
      <ProjectsList>
        <Link href="http://oio-bike.com/fat-bike-plus">
          <Iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rQl6KmzXSlI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Bike"/>
          <TitleLink>OIO BIKE</TitleLink>
        </Link>
        <p>Advertisement for "OIO BIKE" Fat Bike Plus Electro Rower electrical | 2019</p>
      </ProjectsList>
    </ProjectsCatalog>
  </ProjectsContainer>
);

export default Projects;