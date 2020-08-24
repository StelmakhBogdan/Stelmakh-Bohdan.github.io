import styled from 'styled-components';

export const NavBarContainer = styled.div`
  font-family: 'Nunito', sans-serif;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;
  position: relative;
  //position: fixed;
  //top: 0;
  //width: 100%;
  //right: 0;
  //left: 0;
  //z-index: 1030;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2px auto 0px auto;
  padding: 0px 50px;
`;

export const LeftSideNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RightSideNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Hr = styled.hr`
  margin: 0px;
  height: 8px;
  border: 0;
  box-shadow: 0 10px 10px -10px #8c8b8b inset;
`;