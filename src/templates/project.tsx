import { Box, Flex, Link, Text } from '@chakra-ui/core'
import { startCase, upperFirst } from 'lodash'
import React from 'react'
import { Img } from 'react-image'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import PageHeader from '../components/ui/page-header'


export default function Project(props) {
  const { pageContext: { project } } = props
  const btn = {
    isExternal: true,
    px: 8,
    py: 2,
    bg: 'black',
    color: 'gray.200',
    rounded: 'md'
  }
  return (
    <Layout>
      <SEO title={startCase(project.name)} />


      <PageHeader title={startCase(project.name)} hasB />
      <Text textAlign='center' color='gray.500' my={5} fontSize={20}>{upperFirst(project.description)}</Text>


      <Flex mx='auto' rounded={[null, 'lg']} shadow='lg' p={12} backgroundColor={project.color} maxW={600} maxH={600}>
        <Box as={Img} src={project.image} mx='auto' shadow='md' />
      </Flex>

      <Box mx='auto' my={30} justifySelf='center' alignSelf='center' w='fit-content'>
        {project.link && <Link isExternal href={project.link} mr={5} {...btn}>Demo</Link>}

        <Link isExternal href={project.source} {...btn}>Source</Link>
      </Box>

    </Layout>
  )
}
