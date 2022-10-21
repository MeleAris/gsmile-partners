import Head from 'next/head';
import Layout, { siteTitle }from '../components/layout';
import NavBar from '../components/navbar';
import Body from '../components/body';
import Certifications from '../components/certif';

const Home = () => {
  return (
    <div>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <NavBar home/>

        <Body/>

        <Certifications/>

      </Layout>
    </div>
  );
}

export default Home;
