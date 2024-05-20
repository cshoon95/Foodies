import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import LogoImage from "@/assets/logo.png"
import classes from './main-header.module.css'

export default function MainHeader() {
  return (
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={LogoImage} alt="A Plate with food on it" priority/>
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}