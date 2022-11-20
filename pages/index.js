import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  const posts = allPostsData.map(({ id, date, title }) => {
    const postPath = '/public/' + id
    
    return (
        <li key={id} className={utilStyles.listItem}>
          <Link href={`/posts/${id}`}>{title}</Link>
          <br />
          <small>
            <Date dateString={date}/>
          </small>
        </li>
    )
  })

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am fullstack developer based in Berlin, Germany.
          <br/><br/>
          I mostly working in javascript but also Python. I also have worked 
          on various big data projects.
          <br/>
          I am a huge fan of clean code and infrastructure as code, though 
          I dont use these as my main skills.
        </p>
        <p>
          This website is build in {' '}
          <a href="https://nextjs.org/">Next.js</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts}
        </ul>
      </section>
    </Layout>
  )
}
