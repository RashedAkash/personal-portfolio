import About from '@/components/About'
import Contact from '@/components/Contact'
import Education from '@/components/Education'

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
      <Education />
      <Portfolio />
      <Contact />
   </div>
  )
}
