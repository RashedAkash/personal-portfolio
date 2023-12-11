
"use client";
import Image from "next/image";
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";
import me from '../../public/me-removebg-preview.png'
import Link from "next/link";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className=" ">
      <Navbar.Container className="flex py-5 items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <h1 className=" font-bold text-xl text-pink-600">Rashed</h1>
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
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
  );
}
