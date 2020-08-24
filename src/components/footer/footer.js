import React from 'react';

import facebook from '../../img/social-footer/facebook.png';
import gmail from '../../img/social-footer/gmail.png';
import instagram from '../../img/social-footer/instagram.png';
import wetrunsfer from '../../img/social-footer/wetrunsfer.png';
import {
  FooterContainer,
  Hr,
  FooterFlexContainer,
  LeftSideText,
  LeftParagraph,
  SocialIcons,
  ItemLink,
  SocialImg,
  RightSideText,
  RightParagraph
} from './styled';

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