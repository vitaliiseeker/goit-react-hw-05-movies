import { FooterContainer, LinkIcon } from "../Footer/Footer.styled";
import { ReactComponent as IconTMDBshort } from "../icons/tmdbShort.svg";

export const Footer = () => {

  return (
    <>
      <FooterContainer>

        <p> This product uses the <LinkIcon
          href="https://www.themoviedb.org"
          target="_blank"
          rel="noopener nofollow noreferrer">
          <IconTMDBshort width="80" />
        </LinkIcon> API but is not endorsed or certified by TMDB</p>
        <p>&copy; 2022 | All Rights Reserved</p>

      </FooterContainer>
    </>
  )
}