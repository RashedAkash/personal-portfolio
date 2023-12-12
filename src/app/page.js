import About from '@/components/About'
import Contact from '@/components/Contact'

import Hero from '@/components/Hero'
import MySkills from '@/components/MySkills'
import Portfolio from '@/components/Portfolio'
import Image from 'next/image'

export default function Home() {
  return (
    <div >
       
      <Hero />
      <About />
      <MySkills />
      <Portfolio />
      <Contact />
   </div>
  )
}
