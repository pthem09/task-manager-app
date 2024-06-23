import React from 'react';
import { Nav, NavLink, NavMenu } from "./NavbarElements";

export default function CustomNavbar() {
  return (
    <Nav>
        <NavMenu>
            <NavLink to="." activeStyle>
                Home
            </NavLink>
            <NavLink to="./contact" activeStyle>
                Contact
            </NavLink>
        </NavMenu>
    </Nav>
  )
}
