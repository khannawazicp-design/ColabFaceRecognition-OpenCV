import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>OpenCV Face Recognition Demo</title>
        <meta name="description" content="OpenCV Face Recognition for Colab - Web Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          😱 OpenCV Face Recognition 😱
        </h1>

        <p className={styles.description}>
          This project demonstrates face recognition using OpenCV and Google Colab
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/khannawazicp-design/ColabFaceRecognition-OpenCV" className={styles.card}>
            <h2>GitHub Repository &rarr;</h2>
            <p>View the source code and Jupyter notebook on GitHub.</p>
          </a>

          <a href="https://colab.research.google.com/" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>Google Colab &rarr;</h2>
            <p>Open Google Colab to run the face recognition notebook.</p>
          </a>

          <a href="https://youtube.com/shorts/0nmR1mG7iu4" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>Video Tutorial &rarr;</h2>
            <p>Watch the YouTube tutorial for step-by-step instructions.</p>
          </a>

          <div className={styles.card}>
            <h2>About This Project</h2>
            <p>A face recognition project using OpenCV, designed for Google Colab with easy setup instructions.</p>
          </div>
        </div>

        <div className={styles.instructions}>
          <h2>Quick Start Guide</h2>
          <ol>
            <li><strong>Clone the repository</strong> in Google Colab:<br />
              <code>!git clone https://github.com/khannawazicp-design/ColabFaceRecognition-OpenCV</code>
            </li>
            <li><strong>Open the notebook</strong> file: <code>OpenCVFaceRecognition.ipynb</code></li>
            <li><strong>Run the code</strong> to detect faces in the sample image</li>
            <li><strong>(Optional)</strong> Replace <code>me.jpg</code> with your own image</li>
          </ol>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by OpenCV • Next.js • Vercel Analytics</p>
      </footer>
    </div>
  )
}
