import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className='text-6xl text-center capitalize dark:text-gray-500'>NOT FOUND</h1>
    <p className='mt-4 text-center dark:text-gray-600'>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
