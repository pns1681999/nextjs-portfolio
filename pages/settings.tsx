import type { NextPage } from 'next'
import Head from '../components/Head'
import ThemeInfo from '../components/ThemeInfo'
import styles from '../styles/Setting.module.scss'
const Settings: NextPage = () => {
  const themes = [
    {
      name: "GitHub Dark",
      icon: "/github-dark.png",
      publisher: "GitHub",
      theme: "github-dark",
      description: "GitHub theme for VS Code"
    },
    {
      name: "Dracula",
      icon: "/dracula.png",
      publisher: "Dracula Theme",
      theme: "dracula",
      description: "Official Dracula Theme. A dark theme for many editors, shells, and more."
    },
    {
      name: "Ayu Dark",
      icon: "/ayu.png",
      publisher: "teabyii",
      theme: "ayu-dark",
      description: "A simple theme with bright colors."
    },
    {
      name: "Ayu Mirage",
      icon: "/ayu.png",
      publisher: "teabyii",
      theme: "ayu-mirage",
      description: "A simple theme with bright colors."
    },
    {
      name: "Nord",
      icon: "/nord.png",
      publisher: "arcticicestudio",
      theme: "nord",
      description: "An arctic, north-bluish clean and elegant Visual Studio Code theme."
    },
    {
      name: "Night Owl",
      icon: "/night-owl.png",
      publisher: "sarah.drasner",
      theme: "night-owl",
      description: "A VS Code theme for the night owls out there."
    },
  ]
  return (
    <>
      <Head title="Son Pham | Settings"></Head>
      <h1>
        Manager themes
      </h1>
      <div className={styles.container}>
        {
          themes.map((theme) => {
            
            return (<ThemeInfo
            key={theme.name}
            name={theme.name}
            icon={theme.icon}
            publisher={theme.publisher}
            theme={theme.theme}
          />)
          })
        }
      </div>
      
    </>
  )
}

export default Settings
