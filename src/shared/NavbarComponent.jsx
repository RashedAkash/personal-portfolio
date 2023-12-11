
"use client";
import Image from "next/image";
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";
import me from '../../public/name.png'
import Link from "next/link";
import Headroom from "react-headroom";

export const NavbarComponent = () => {
  return (
    <Headroom>
  <Navbar fluid={true} className=" bg-[#030014] z-50 shadow-2xl text-white">
      <Navbar.Container className="flex  md:py-5 items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <Image src={me} alt="img" width={70} height={70} />
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden  items-center justify-between gap-8"
          >
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/projects'>Projects</Link>
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/projects'>Projects</Link>
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <Link href='/contact'>
           <Button size="sm"className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white border-none " >
            Contact
          </Button>
          </Link>
         
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
</Headroom>
    
  );
}
