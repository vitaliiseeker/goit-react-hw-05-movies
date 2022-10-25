import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Container } from "../Container/Container";
import { Loader } from "../Loader/Loader";
import { Nav, List, Item, LinkNav } from './Layout.styled';
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
          <IconTMDBfull width="60" />
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