import Head from 'next/head';
import Layout, { siteTitle }from '../components/layout';
import NavBar from '../components/navbar';
import bg from '../public/assets/img/person/person_1.jpg';
import Body from '../components/body';
import Certifications from '../components/certif';

export default function Home() {
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
