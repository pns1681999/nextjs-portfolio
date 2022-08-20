import type { NextPage } from 'next'
const Articles: NextPage = () => {
  return (
    <>
      <h1>
        Articles page
      </h1>
    </>
  )
}
export async function getStaticProps() {
  return {
    props: {
      title: 'Articles'
    }
  }
}
export default Articles
