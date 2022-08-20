import styles from '../styles/ContactCode.module.scss'
const ContactCode = () => {
  const contacts = [
    {
      socialName: 'email',
      link: 'pns1681999@gmail.com',
      href: 'mailto:pns1681999@gmail.com'
    },
    {
      socialName: 'phone',
      link: '+84 888 738 278',
      href: 'tel:+84888738278'
    },
    {
      socialName: 'linkedin',
      link: 'linkedin.com/in/pns1681999',
      href: 'https://www.linkedin.com/in/pns1681999/'
    },
    {
      socialName: 'github',
      link: 'github.com/pns1681999',
      href: 'https://github.com/pns1681999'
    },
    {
      socialName: 'facebook',
      link: 'facebook.com/pns.1999',
      href: 'https://www.facebook.com/pns.1999/'
    }
  ]
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.social</span> &#123;
      </p>
      {
        contacts.map((item, index) => (
          <p className={styles.line} key={index}>
            &nbsp;&nbsp;&nbsp;{item.socialName}:{' '}
            <a href={item.href} target='_blank' rel='noreferrer'>
              {item.link}
            </a>
            ;
          </p>
        ))
      }
      <p className={styles.line}>
        &#125;
      </p>
    </div>
  )
}

export default ContactCode