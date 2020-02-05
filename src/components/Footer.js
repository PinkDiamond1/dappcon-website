import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from 'theme'
import HideOnMobile from 'components/HideOnMobile'
import { Link } from 'gatsby'

const StyledFooter = styled.footer`
  width: 100%;
  position: absolute;
  left: 12px;
  bottom: 14px;
`

const LinksCSS = css`
  color: ${props => (props.red ? colors.reddishPink : colors.secondaryBlack)};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
`

const StyledLink = styled(Link)`
  ${LinksCSS}
`

const StyledExternalLink = styled.a`
  ${LinksCSS}
`

const CookieSettingsBtn = styled.button`
  background: none;
  border: none;
  color: ${colors.secondaryBlack};
  text-decoration: underline;
  font-size: 14px;
  padding: 0;
  cursor: pointer;
`

const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.secondaryBlack};
  font-size: 14px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

const FooterColumn = styled.div`
  flex-basis: 40%;
  line-height: normal;
  color: ${colors.secondaryBlack};
  font-size: 14px;

  &:last-child {
    flex-basis: auto;
    margin-right: 30px;
  }

  @media screen and (max-width: 767px) {
    font-size: 13px;
    display: flex;
    flex-direction: column;
    line-height: 2;
    flex-basis: 100%;

    &:last-child {
      order: -1;
    }
  }
`

const MobileSplitter = styled.br`
  display: none;

  @media screen and (max-width: 767px) {
    display: inherit;
  }
`

const Footer = ({ setCookieBannerOpen }) => (
  <StyledFooter>
    <ColumnsContainer>
      <FooterColumn>
        <p>
          <span>2020 DAPPCON</span>
          <span> | </span>
          <StyledLink to="/imprint" underline>
            Imprint
          </StyledLink>
          <MobileSplitter />
          <HideOnMobile>
            <span> | </span>
          </HideOnMobile>
          <StyledLink to="/privacy-policy" underline>
            Privacy Policy
          </StyledLink>
          <span> | </span>
          <CookieSettingsBtn
            onClick={() => {
              setCookieBannerOpen(true)
            }}
          >
            Cookie settings
          </CookieSettingsBtn>
        </p>
      </FooterColumn>
      <FooterColumn>
        <p>
          <StyledExternalLink
            href="mailto:info@dappcon.io"
            target="_blank"
            rel="noopener noreferrer"
            underline
          >
            info@dappcon.io
          </StyledExternalLink>
          <span> | </span>
          <StyledExternalLink
            href="https://twitter.com/dappcon_berlin"
            target="_blank"
            rel="noopener noreferrer"
            underline
          >
            Twitter
          </StyledExternalLink>
          <span> | </span>
          <StyledExternalLink
            href="https://t.me/joinchat/EcVRsUPKJRYHbrijhd_Cbw"
            target="_blank"
            rel="noopener noreferrer"
            underline
          >
            Telegram
          </StyledExternalLink>
        </p>
      </FooterColumn>
    </ColumnsContainer>
  </StyledFooter>
)

export default Footer
