import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router"
import style from "../styles/Tab.module.scss"

const Tab = ({ icon, filename,  path}) => {
  const router = useRouter()
  return (
    <Link href={path}>
      <div className={`${style.tab} ${router.pathname === path && style.active}`}>
        <Image src={icon} alt={filename} layout="fixed" width={18} height={18} />
        <p>{filename}</p>
      </div>
    </Link>
  )
}
export default Tab