import Image from 'next/image'
import { Inter } from 'next/font/google'
import SideNavBar from '@/components/sideNavBar'
import ScrollBar from '@/components/scrollBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='grid grid-flow-col grid-cols-max overflow-hidden'>
        <div><SideNavBar/></div>
        <div className='overflow-auto'><ScrollBar/></div>
      </div>
    </main>
  )
}
