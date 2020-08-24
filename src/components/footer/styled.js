import styled from 'styled-components';

export const FooterContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  padding-bottom: 5px;
  background: #FFFFFF;
`;

export const Hr = styled.hr`
  margin: 0px;
  height: 8px;
  border: 0;
  box-shadow: 0 10px 10px -10px #8c8b8b inset;
`;

export const FooterFlexContainer = styled.div`
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

export const LeftSideText = styled.div`
  @media(max-width: 1024px) {
    order: 2;
  }
`;

export const SocialIcons = styled.div`
  padding-right: 25px;
  @media(max-width: 1024px) {
    order: 1;
    padding: 0px;
  }
`;

export const RightSideText = styled.div`
  @media(max-width: 1024px) {
    order: 3;
  }
`;

export const ItemLink = styled.a`
  margin: 0 5px;
`;

export const SocialImg = styled.img`
 width: 30px;
 &:hover {
   opacity: 0.7;
`;

export const LeftParagraph = styled.p`
  padding-left: 50px;
  color: #000;
  font-size: x-small;
  margin-bottom: 0px;
  @media(max-width: 1024px) {
    padding-left: 0px;
    margin: 2px;
    color: #000;
    }
`;

export const RightParagraph = styled.p`
  padding-right: 50px;
  color: #000;
  font-size: x-small;
  margin-bottom: 0px;
  @media(max-width: 1024px) {
    padding-right: 0px;
    color: #000;
    }
`;