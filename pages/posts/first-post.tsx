import Layout from '@/components/layout';
import Head from 'next/head';
import Link from 'next/link';


const FirstPost = () => {

    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Posts</h1>
            <h1 >
                Go <Link href="/">Home page!</Link>
            </h1>
        </Layout>
    )
}

export default FirstPost