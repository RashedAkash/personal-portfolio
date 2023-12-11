

"use client";
import Image from "next/image";
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";
import Link from "next/link";
import img from '../../public/name.png'

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <Image
              src={img}
              alt="keep"
              width="70"
              height="70"
            />
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
             <Link href='/'>
            <Navbar.Link linkName="Home" />
            </Link>
            <Link href='/about'>
            <Navbar.Link linkName="About" />
            </Link>
            <Link href='/projects'>
            <Navbar.Link linkName="Projects" />
            </Link>
            
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
             <Link href='/'>
            <Navbar.Link linkName="Home" />
            </Link>
            <Link href='/about'>
            <Navbar.Link linkName="About" />
            </Link>
            <Link href='/projects'>
            <Navbar.Link linkName="Projects" />
            </Link>
            
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          
          <Link href='/contact'>
          <Button size="sm" className=" text-white bg-pink-700">
            Contact
          </Button>
          </Link>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}

