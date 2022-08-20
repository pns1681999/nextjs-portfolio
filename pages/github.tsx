import type { NextPage } from 'next'
const Github: NextPage = () => {
  return (
    <>
      <h1>
        Github page
      </h1>
    </>
  )
}
export async function getStaticProps() {
  return {
    props: {
      title: 'Github'
    }
  }
}
export default Github
