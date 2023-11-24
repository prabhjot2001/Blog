import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>

      <div className={styles.info}>

        <div className={styles.logo}>
          <Image src="/l2.png" alt='' width={200} height={40}/>
          {/* <h1>Blog-Rush</h1> */}
        </div>

        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis optio exercitationem officiis nihil, maiores aut reprehenderit quidem dolore perspiciatis id amet iure distinctio ea, similique at nesciunt itaque quaerat. Amet.</p>

        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18}/>
          <Image src="/facebook.png" alt="" width={18} height={18}/>
          <Image src="/facebook.png" alt="" width={18} height={18}/>
        </div>
      </div>


      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
          <Link href='/'>Blog</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
          <Link href='/'>Blog</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
          <Link href='/'>Blog</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
          <Link href='/'>Blog</Link>
        </div>
      </div>

    </div>
  )
}

export default Footer