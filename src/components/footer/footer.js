import React from 'react';
import styled from 'styled-components';

import facebook from '../../img/social-footer/facebook.png';
import gmail from '../../img/social-footer/gmail.png';
import instagram from '../../img/social-footer/instagram.png';
import wetrunsfer from '../../img/social-footer/wetrunsfer.png';

const Footer = () => (
  <FooterContainer>
    <Hr/>
    <FooterFlexContainer>
      <LeftSideText>
        <LeftParagraph>COPYRIGHT © 2020 Mr. Stelmakh Bohdan</LeftParagraph>
      </LeftSideText>
      <SocialIcons>
        <ItemLink href="https://www.facebook.com/bogdan.stelmah.90" target="_blank">
          <SocialImg src={facebook} alt=""/>
        </ItemLink>
        <ItemLink href="mailto:bodya300595@gmail.com" target="_blank">
          <SocialImg src={gmail} alt=""/>
        </ItemLink>
        <ItemLink href="https://www.instagram.com/stelmakh_bogdan/" target="_blank">
          <SocialImg src={instagram} alt=""/>
        </ItemLink>
        <ItemLink href="https://we.tl/b-CjgRYT8wey" target="_blank">
          <SocialImg src={wetrunsfer} alt=""/>
        </ItemLink>
      </SocialIcons>
      <RightSideText>
        <RightParagraph>POWERED BY STELMAKH BOHDAN</RightParagraph>
      </RightSideText>
    </FooterFlexContainer>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  padding: 5px 0px 5px 0px;
  background: #FFFFFF;
`;

const Hr = styled.hr`
  margin: 0px;
  height: 8px;
  border: 0;
  box-shadow: 0 10px 10px -10px #8c8b8b inset;
`;

const FooterFlexContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  @media(max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const LeftSideText = styled.div`
  @media(max-width: 1024px) {
    order: 2;
  }
`;

const SocialIcons = styled.div`
  padding-right: 25px;
  @media(max-width: 1024px) {
    order: 1;
    padding: 0px;
  }
`;

const RightSideText = styled.div`
  @media(max-width: 1024px) {
    order: 3;
  }
`;

const ItemLink = styled.a`
  margin: 0 5px;
`;

const SocialImg = styled.img`
 width: 30px;
 &:hover {
   opacity: 0.7;
`;

const LeftParagraph = styled.p`
  padding-left: 50px;
  color: #000;
  font-size: x-small;
  @media(max-width: 1024px) {
    padding-left: 0px;
    margin: 2px;
    color: #000;
    }
`;

const RightParagraph = styled.p`
  padding-right: 50px;
  color: #000;
  font-size: x-small;
  @media(max-width: 1024px) {
    padding-right: 0px;
    color: #000;
    }
`;