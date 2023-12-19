import ScrollBar from '@/components/scrollBar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="w-full h-full overflow-hidden">
      <ScrollBar/>
    </main>
  )
}
