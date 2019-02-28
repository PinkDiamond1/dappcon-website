import React from 'react'
import Helmet from 'react-helmet'
import { createGlobalStyle } from 'styled-components'
import { StaticQuery, graphql, withPrefix } from 'gatsby'
import reset from 'styled-reset'

import DesktopNav from 'components/DesktopNav'
import Footer from 'components/Footer'
import MobileHeader from 'components/MobileHeader'

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "Averta";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Averta-Regular"), url(${withPrefix('/fonts/38C995_1_0.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'Averta';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local("Averta-Extrabold"), url(${withPrefix('/fonts/38C995_0_0.ttf')}) format('truetype');
  }

  body {
    font-family: Averta, sans-serif;
  }
`

export const LayoutTemplate = ({ children, location }) => (
  <>
    <GlobalStyles />
    <DesktopNav location={location} />
    <MobileHeader location={location} />
    <div>{children}</div>
    <Footer />
  </>
)

const TemplateWrapper = props => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />

          <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.png" />
        </Helmet>
        <LayoutTemplate {...props} />
      </div>
    )}
  />
)

export default TemplateWrapper
