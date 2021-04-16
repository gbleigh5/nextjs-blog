import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// object : allPostsData

export default function Home({ allPostsData }) {
  return (
    <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>
            I am the stone that the builder refused
            I am the visual, the inspiration
            That made Lady sing the blues

            I'm the spark that makes your idea bright
            The same spark that lights the dark
            So that you can know your left from your right

            I am the ballot in your box, the bullet in the gun
            The inner glow that lets you know to call your brother son
            The story that just begun, the promise of what's to come
            And I'mma remain a soldier till the war is won

            Judo flip...chop chop chop 
      </p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
    </section>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li> 
          ))}
        </ul>
      </section>
  </Layout>
)
}



