import type { NextPage } from 'next'
import ContactCode from '../components/ContactCode'
import styles from '../styles/ContactPage.module.scss'
const Contact: NextPage = () => {
  return (
    <div>
        <div className={styles.comment}>{'/* Contact with me via */'}</div>
        <ContactCode/>
    </div>
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
