import ScrollBar from '@/components/ScrollBar'
import { fetchPosts } from '@/helpers';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps() {
  const postData = await fetchPosts();

  return {
    props: {
      postData,
    },
  };
}

export default function Home({postData}: any) {
  return (
    <main className="w-full h-full overflow-hidden">
      <ScrollBar postData={postData}/>
    </main>
  )
}
