import ScrollBar from '@/components/ScrollBar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="w-full h-full overflow-hidden">
      <ScrollBar/>
    </main>
  )
}
