import React from 'react'
import clsx from 'clsx'
import styles from './About.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
export default function About() {
  return (
    <section className={styles.main}>
      <div className={styles.firstScrip}>
        <div className={styles.about}>
          <div className={styles.container}>
            <div className={styles.headline}>
              <h2 className={styles.title}>Welcome!</h2>
              <div className={styles.headlineText}>
                <p>Find all the information you need about Innersloth, our games, assets, and everything else.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.press}>
          <div className={styles.container}>
            <div className={styles.wrapper}>

              <div className={styles.pressBlock}>
                <h2 className={clsx(styles.title, styles.headline)}>About Innersloth</h2>
                <p>Innersloth is a small independent game studio most notable for creating Among Us and The Henry Stickmin Collection. Founded by Forest Willard and Marcus Bromander in 2015, they made the games they wanted to and hoped people would want to play them. After numerous awards, global press coverage, and millions of downloads, Innersloth can now confirm at least 4 people have played their games. Nice.</p>
                <p>Innersloth is mainly based around Seattle, USA, but has employees and partners all across the globe.</p>
                <p>&nbsp;</p>
              </div>

              <div className={styles.pressBlock}>
                <h2 className={clsx(styles.title, styles.headline)}>History</h2>
                <p>After meeting in college, Forest Willard and Marcus Bromander created Innersloth as a partnership in 2015 to release Dig2China. They worked part time on several unreleased games (T_T) until finally going full-time indie in late 2018 for Among Us. Marcus, best known online as PuffballsUnited, is also the creator of the Henry Stickmin series on Newgrounds, which started in 2008.</p>
              </div>
            </div>
          </div>
        </div >
      </div>

      <div className={styles.secondScript}>
        
      </div>
    </section>
  )
}
