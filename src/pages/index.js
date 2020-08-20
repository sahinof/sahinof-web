import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="home" keywords={[`omer`, `furkan`, `sahin`, `bio`, `personal`, `project`, `manager`]} />
    <LandingBio />
  </Layout>
)

export default IndexPage
