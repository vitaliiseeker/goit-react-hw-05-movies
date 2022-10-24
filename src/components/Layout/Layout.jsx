// import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Container } from "../Container/Container";
// import { Loader } from "../Loader/Loader";
import { Nav, List, Item, LinkNav } from './Layout.styled';
import { Footer } from "components/Footer/Footer";
import { ReactComponent as IconTMDBfull } from "../icons/tmdbFull.svg";

export const Layout = () => {
  return (
    <>
      <Container>
        <Nav>
          <List>
            <Item>
              <LinkNav className="active" to="/" end>Home</LinkNav>
            </Item>
            <Item>
              <LinkNav to="movies">Movies</LinkNav>
            </Item>
          </List>
          <IconTMDBfull width="60" />
        </Nav>
        <div style={{ flexGrow: 1 }}>
          {/* <Suspense fallback={<Loader />}> */}
          {/* <Suspense fallback={<div>Loading page...</div>}> */}
          <Outlet />
          {/* </Suspense> */}
        </div>
        <Footer />
      </Container>
    </>
  );
};
