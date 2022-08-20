import type { NextPage } from 'next'
const Contact: NextPage = () => {
  return (
    <>
      <h1>
        Contact page
      </h1>
    </>
  )
}
export async function getStaticProps() {
  return {
    props: {
      title: 'Contact'
    }
  }
}
export default Contact
