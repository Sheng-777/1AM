import Image from 'next/image'
import { Inter } from 'next/font/google'
import SideNavBar from '@/components/sideNavBar'
import ScrollBar from '@/components/scrollBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="w-full h-full overflow-hidden">
      <ScrollBar/>
    </main>
  )
}
