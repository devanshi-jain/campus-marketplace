import Image from 'next/image';
import Link from 'next/link';
import { getVideos } from './firebase/functions';
import styles from './page.module.css'

export default async function Home() {
  const videos = await getVideos();

  return (
    <main>
    <div className={styles.header}>
      <h1>Campus Marketplace</h1>
    </div>
    <div className={styles.content}>
      {
        videos.map((video) => (
          <Link key={video.filename} href={`/watch?v=${video.filename}`}>
            <Image src={'/thumbnail.png'} alt='video' width={120} height={80} className={styles.thumbnail} />
          </Link>
        ))
      }
      <div className={styles.imageContainer}>
        <Image src="/your-image.jpg" alt="Your Image" width={400} height={300} />
      </div>
    </div>
  </main>
  )
}
