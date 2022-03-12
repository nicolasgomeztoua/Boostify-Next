import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Search } from "@styled-icons/boxicons-regular/Search";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { Bars } from "@styled-icons/fa-solid/Bars";
import { useState, useEffect } from "react";
import { useWindowScrollPositions } from "../../hooks/useWindowScrollPosition";

const MenuBars = styled(Bars)`
  font-size: 1.2em;
  cursor: pointer;
  transition: 0.3s;
  text-align: right;
  &:hover {
    color: #e54416;
  }
  width: calc(1vw + 18px);
  margin: 0 5px;
  height: auto;
`;
const Searchdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 0;
  input,
  button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  input::placeholder {
    color: #fff;
  }
  input:focus {
    outline: none;
  }
`;
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2em;
  z-index: 9;
  transition: 0.7s;
  color: #fff;
  background: #070707;
  a {
    text-decoration: none;
    font-size: 0.9em;
    transition: 0.3s;
    transition-timing-function: ease-in-out;
    font-weight: 600;
    color: #fff;
  }
  a:hover {
    color: #e54416;
  }
  .brand {
    font-size: 1.6em;
  }
  ${MenuBars} {
    font-size: 1.2em;
    cursor: pointer;
    transition: 0.3s;
    text-align: right;
  }

  ${MenuBars}:hover {
    color: #e54416;
  }
  .menu_open {
    height: 100vh;
    opacity: 1;
  }
`;
const Menu = styled.div`
  background: #111;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 1.3em;
  height: 0;
  opacity: 0;
  transition: 0.7s cubic-bezier(0.74, -0.03, 0.83, 0.67);
  overflow-y: hidden;
  ul,
  ${Searchdiv} {
    margin: 1em auto;
  }
  li {
    margin: 1em 0;
  }
  & > div {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    padding: 6em 1em 3em 1em;
    height: 100%;
    overflow-y: scroll;
  }
  div::-webkit-scrollbar {
    display: none;
  }
`;

const NextImage = styled(Image)``;
const ItemsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;
const ListItem = styled.li`
  font-size: 20px;
`;

const SocialMediaList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 2em 0;
`;
const SocialMediaItem = styled.li`
  display: inline-block;
  margin: 0 0.5em;
`;
const InstagramIcon = styled(Instagram)`
  width: 25px;
  margin: 0 5px;
  height: auto;
`;
const EmailIcon = styled(EmailOutline)`
  width: 25px;
  margin: 0 5px;
  height: auto;
`;

const SearchInput = styled.input``;
const SearchIcon = styled(Search)`
  width: 25px;
  margin: 0 5px;
  height: auto;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1350px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  ul {
    width: 100%;
    margin: 0 1em;
  }
  ul:nth-child(2) {
    text-align: right;
  }
  ul li {
    display: inline-block;
    margin: 0 0.7em;
  }
`;
const InnerContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  margin: 0;
  font-family: Helvetica, sans-serif;
  * {
    box-sizing: border-box;
  }
  min-height: 10vh;

  background-size: cover;
  .navbar_active {
    background: #111;
    padding: 1em;
  }

  @media screen and (max-width: 800px) {
    ${InnerContainer} {
      display: none;
    }
    ${Container} {
      grid-template-columns: 1fr 1fr;
      justify-items: flex-end;
    }
  }

  @media screen and (min-width: 800px) {
    ${Searchdiv} {
      display: none;
    }
  }

  @media screen and (max-width: 400px) {
    font-size: 13px;
  }
`;
const NavButton = styled.button`
  padding: 8px 20px;
  border-radius: 4px;
  outline: none;
  border: none;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  background-color: #e43403;
  &:hover {
    padding: 2px 18px;
    opacity: 0.8;
    color: #fff;
    border-radius: 4px;
    border: 2px solid #e43403;
  }
`;

const Navbar = () => {
  const [menuSelector, setMenuSelector] = useState(false);
  const [menuClass, setMenuClass] = useState("nav");
  const [navClass, setNavClass] = useState("nav");

  useEffect(() => {
    if (menuSelector === true) {
      setMenuClass("menu_open");
    } else {
      setMenuClass("menu");
    }
  }, [menuSelector]);
  const { scrollY } = useWindowScrollPositions();
  useEffect(() => {
    if (scrollY !== 0) {
      setNavClass("navbar_active");
    } else {
      setNavClass("nav");
    }
  }, [scrollY]);
  return (
    <>
      <Header>
        <Nav id="navbar" className={navClass}>
          <Menu className={menuClass}>
            <div>
              <div>
                <NextImage
                  width={150}
                  height={100}
                  src="/assets/images/logo.png"
                  className="logo"
                  alt="logo"
                />
              </div>
              <ItemsList>
                <ListItem>
                  <Link href="#">Blog</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Whats New</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Categories</Link>
                </ListItem>
              </ItemsList>
              <ItemsList>
                <ListItem>
                  <Link href="#">Projects</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">News</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Store</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">About</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Contact</Link>
                </ListItem>
              </ItemsList>
              <SocialMediaList className="social-media">
                <SocialMediaItem>
                  <a href="mailto:support@boostify.es">
                    <EmailIcon />
                  </a>
                </SocialMediaItem>
                <SocialMediaItem>
                  <a
                    href="https://www.instagram.com/boostifyofficial/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                </SocialMediaItem>
              </SocialMediaList>
              <div>
                <Searchdiv className="input-wrap">
                  <SearchInput type="search" placeholder="Search..." />
                  <button type="submit">
                    <SearchIcon></SearchIcon>
                  </button>
                </Searchdiv>
              </div>
            </div>
          </Menu>
          <Container className="container">
            <Link href="/" className="brand" passHref>
              <NextImage
                width={400}
                height={100}
                src="/assets/images/logo_big.png"
                alt="logo"
              />
            </Link>
            <InnerContainer className="container-inner">
              <ul>
                <ListItem>
                  <Link href="/">Home</Link>
                </ListItem>
                <ListItem>
                  <Link href="/">Services</Link>
                </ListItem>
                <ListItem>
                  <Link href="/login" passHref>
                    <NavButton>Login</NavButton>
                  </Link>
                </ListItem>
              </ul>
              <div>
                <Searchdiv className="input-wrap">
                  <SearchInput type="search" placeholder="Search..." />
                  <button type="submit">
                    <SearchIcon></SearchIcon>
                  </button>
                </Searchdiv>
              </div>
            </InnerContainer>
            <MenuBars onClick={() => setMenuSelector(!menuSelector)} />
          </Container>
        </Nav>
      </Header>
    </>
  );
};

export default Navbar;
