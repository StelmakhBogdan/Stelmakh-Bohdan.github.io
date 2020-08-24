import React from 'react';
import {
  Container,
  TabContainer,
  Row,
  Col,
  Nav,
  TabContent,
  TabPane
} from "react-bootstrap";

import './about.css';
import picture1 from '../../img/about/about2.jpg';
import picture2 from '../../img/about/about2.jpg';
import picture3 from '../../img/about/about2.jpg';
import {
  MeasurementsRow,
  MeasurementsImg,
  MeasurementsWrapper,
  MeasurementsTitle,
  MeasurementsList,
  MeasurementsEM
} from './styled';

const About = () => (
  <div className="jumbotron">
    <Container>
      <TabContainer  id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="first">Measurements</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Polaroids</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Contact me</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} className="content-container">
            <TabContent className="mt-2">
              <TabPane eventKey="first">
                <MeasurementsRow>
                  <MeasurementsImg
                    className="d-block w-100"
                    src={picture1}
                    alt="first"
                  />
                  <MeasurementsWrapper>
                    <MeasurementsTitle>BOHDAN</MeasurementsTitle>
                    <ul>
                      <MeasurementsList>
                        <MeasurementsEM>"HEIGHT "</MeasurementsEM>
                        <MeasurementsEM>189 - 6' 2"</MeasurementsEM>
                      </MeasurementsList>
                      <MeasurementsList>
                        <MeasurementsEM>"CHEST "</MeasurementsEM>
                        <MeasurementsEM>100 - 39"</MeasurementsEM>
                      </MeasurementsList>
                      <MeasurementsList>
                        <MeasurementsEM>"WAIST "</MeasurementsEM>
                        <MeasurementsEM>78 - 31"</MeasurementsEM>
                      </MeasurementsList>
                      <MeasurementsList>
                        <MeasurementsEM>"HIPS "</MeasurementsEM>
                        <MeasurementsEM>99 - 39"</MeasurementsEM>
                      </MeasurementsList>
                      <MeasurementsList>
                        <MeasurementsEM>"SHOES "</MeasurementsEM>
                        <MeasurementsEM>44 - 12.5</MeasurementsEM>
                      </MeasurementsList>
                      <MeasurementsList>
                        <MeasurementsEM>"HAIR "</MeasurementsEM>
                        <MeasurementsEM>BROWN</MeasurementsEM>
                      </MeasurementsList>
                      <MeasurementsList>
                        <MeasurementsEM>"EYES "</MeasurementsEM>
                        <MeasurementsEM>BLUE</MeasurementsEM>
                      </MeasurementsList>
                    </ul>
                  </MeasurementsWrapper>
                </MeasurementsRow>
              </TabPane>
              <TabPane eventKey="second">
                <img
                  className="d-block w-100"
                  src={picture2}
                  alt="second"
                /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto asperiores atque beatae delectus eveniet exercitationem harum,
                impedit incidunt ipsam labore magnam magni modi,
                quaerat quam quasi sequi similique sunt voluptatibus.
              </p>
              </TabPane>
              <TabPane eventKey="third">
                <img
                  className="d-block w-100"
                  src={picture3}
                  alt="third"
                /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto asperiores atque beatae delectus eveniet exercitationem harum,
                impedit incidunt ipsam labore magnam magni modi,
                quaerat quam quasi sequi similique sunt voluptatibus.
              </p>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </Container>
  </div>
);

export default About;