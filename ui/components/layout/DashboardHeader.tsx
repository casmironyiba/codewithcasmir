import boxProperty from "@/lib/utilities/boxProperty";
import displayFlex from "@/lib/utilities/displayFlex";
import Themes from "@/lib/utilities/themes";
import React from "react";
import styled from 'styled-components'

const Header = ({ title, subtitle, rightElement }: HeaderProps ) => {
  return (
    <Container>
      <div>
        <h1 className="header__title">{title}</h1>
        <p className="header__subtitle">{subtitle}</p>
      </div>
      {rightElement && <div>{rightElement}</div>}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  ${boxProperty('100%','70px','','5px',Themes.$primary)};
  ${displayFlex('space-between','center','row nowrap')};

`;
