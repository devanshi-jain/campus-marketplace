'use client';

import { useSearchParams } from 'next/navigation';
import styles from './watch.module.css'; // Import your CSS file

export default function Watch() {
  const videoPrefix = 'https://storage.googleapis.com/campus-marketplace-processed-videos/';
  const videoSrc = useSearchParams().get('v');

  return (
    <div className={styles.watchContainer}>
      <h1>Watch Page</h1>
      <video controls src={videoPrefix + videoSrc} />
    </div>
  );
}
