import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Container } from "../Container/Container";
import { Loader } from "../Loader/Loader";
import { Nav, List, Item, LinkNav, LinkIcon } from './Layout.styled';
import { Footer } from "components/Footer/Footer";
import { ReactComponent as IconTMDBfull } from "../../images/tmdbFull.svg";

export const Layout = () => {
  return (
    <>
      <Container>
        <Nav>
          <List>
            <Item>
              <LinkNav to="/" end>Home</LinkNav>
            </Item>
            <Item>
              <LinkNav to="movies">Movies</LinkNav>
            </Item>
          </List>
          <LinkIcon
            href="https://www.themoviedb.org"
            target="_blank"
            rel="noopener nofollow noreferrer">
          <IconTMDBfull width="60" />
          </LinkIcon>
        </Nav>
        <div style={{ flexGrow: 1 }}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
        <Footer />
      </Container>
    </>
  );
};