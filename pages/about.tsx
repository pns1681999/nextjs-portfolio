import type { NextPage } from 'next'
const About: NextPage = () => {
  return (
    <>
      <h1>
        About page
      </h1>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'About'
    }
  }
}
export default About
