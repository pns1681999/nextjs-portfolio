import type { NextPage } from 'next'
const Projects: NextPage = () => {
  return (
    <>
      <h1>
        Projects page
      </h1>
    </>
  )
}
export async function getStaticProps() {
  return {
    props: {
      title: 'Projects'
    }
  }
}
export default Projects
