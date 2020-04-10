import React from "react"
import GlobalStyle from "../styles/global"
import tw from "tailwind.macro"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "./logo"

const Layout = ({ data }) => (
  <>
    <GlobalStyle />
    <MenuBar />
  </>
)

export default Layout

const MenuBar = () => {
  const menuItems = [
    "Home",
    "Beauty",
    "Travel",
    "Culinary",
    "Stories",
    "About",
    "Contact",
  ]

  return (
    <Bar>
      <Sol>
        <Logo />
      </Sol>
      <Menu>
        {menuItems.map(item => (
          <MenuItem name={item} />
        ))}
      </Menu>
    </Bar>
  )
}

const MenuItem = ({ link, name }) => {
  return (
    <Link to={link}>
      <Item>{name}</Item>
    </Link>
  )
}

const Item = styled.div`
  ${tw`w-auto flex flex-wrap mx-2 `}
  letter-spacing: 0.1em;
  font-family: "Popo", sans-serif;
`

const Bar = styled.div`
  ${tw`fixed`};
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  background-color: #fff;
`

const Menu = styled.div`
  ${tw`w-full inline-block justify-center flex flex-wrap`};
  padding: 30px;

  a {
    color: rgb(153, 153, 153);
    text-decoration: none;
    transition: all 0.4s ease;
  }
  a:hover {
    color: rgb(17, 17, 17);
  }
`

const Sol = styled.div`
  ${tw`fixed inline-block`};
  padding: 20px;
  padding-left: 110px;
`
