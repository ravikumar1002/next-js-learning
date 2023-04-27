import Link from "next/link";
import Image from 'next/image';
import Layout, { siteTitle } from "@/components/layout";
import utilStyles from '@/styles/utils.module.css';
import Head from "next/head";
import { getSortedPostsData } from "@/lib/posts";
import Date from "@/components/date";



export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

interface IPostsData {
  id: string;
  date: string;
  title: string;
}

interface IHomeProps {
  allPostsData: IPostsData[]
}

const Home = (props: IHomeProps) => {

  const { allPostsData } = props

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Ravi kumar</p>
        <p>
          This is a sample website - you’ll be building a site like this on{' '}
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
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


export default Home