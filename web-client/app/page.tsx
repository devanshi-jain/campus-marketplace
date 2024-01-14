import Image from 'next/image';
import Link from 'next/link';
import { getVideos } from './firebase/functions';
import styles from './page.module.css';

export default async function Home() {
  const videos = await getVideos();

  return (
    <main>
      <section className={styles.home}>
        <div className={styles.leftContent}>
          <div className={styles.header}>
            <h1>Campus Marketplace</h1>
          </div>
          <p>
            Your college essentials marketplace to share and find and reuse electronics, furniture, textbooks, iclickers, and more within your 
            campus community.
          </p>
          {/* You can uncomment the repository link if needed */}
          <p>
            The repository for the code is: <a href="https://github.com/devanshi-jain/campus-marketplace" style={{ color: '#e28743' }}>https://github.com/devanshi-jain/campus-marketplace</a>
          </p>
        </div>
        <div className={styles.rightContent}>
          <Image src={'/main-img.jpg'} alt="illustration" width={750} height={750} />
        </div>
      </section>

      <div className={styles.productListing}>
            <h1>Product Listing</h1>
          </div>
      <div className={styles.content}>
        <div className={styles.thumbnailContainer}>

          <br />
          {videos.map((video) => (
            <Link key={video.filename} href={`/watch?v=${video.filename}`}>
              <div className={styles.thumbnail}>
                <Image src={'/thumbnail.png'} alt='video' width={250} height={150} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
