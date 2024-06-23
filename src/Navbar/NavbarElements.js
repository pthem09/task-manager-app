import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    text-align: center;
    color: white;
`;
 
export const NavLink = styled(Link)`
    display: inline-flex;
    list-style: none;
    min-width: 200px;
    }
`;
 
export const NavMenu = styled.div`
    margin: 5px;
    padding: 5px;
    text-align: center;
    background-color: white;
 */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;