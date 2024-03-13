import styled, { css } from 'styled-components'

const HeaderStyle = styled.div`
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    z-index: 100;
    background: white;
    top: 0px;
    background-color: #ff3f3f;
    box-shadow: 10px 5px 5px #000;
    clip-path: polygon(0 0,100% 0,100% 70%,62% 70%,50% 100%,0 100%);
    height: 7rem;
    padding: 0.75rem;
    position: relative;
    width: 100%;
    `


    
const Nav = styled.nav`
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 5rem;
      ` 
      
const Filter = styled.div`
    filter: drop-shadow(-1px 6px 3px rgba(50,0,0,.4));
`


export {  HeaderStyle, Nav, Filter };

