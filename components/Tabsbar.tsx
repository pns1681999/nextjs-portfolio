import style from "../styles/Tabsbar.module.scss"
import Tab from "./Tab"

const Tabsbar = () => {
  const tabs = [
    {
      icon: '/react_icon.svg',
      filename: 'home.jsx',
      path: '/'
    },
    {
      icon: '/html_icon.svg',
      filename: 'about.jsx',
      path: '/about'
    },
    {
      icon: '/css_icon.svg',
      filename: 'contact.jsx',
      path: '/contact'
    },
    {
      icon: '/js_icon.svg',
      filename: 'projects.jsx',
      path: '/projects'
    },
    {
      icon: '/json_icon.svg',
      filename: 'articles.jsx',
      path: '/articles'
    },
    {
      icon: '/markdown_icon.svg',
      filename: 'github.jsx',
      path: '/github'
    },
  ]
  return (
    <div className={style.tabs}>
      {
        tabs.map(tab => (<Tab key={tab.filename} icon={tab.icon} filename={tab.filename} path={tab.path} />))
      }
    </div>
  )
}

export default Tabsbar