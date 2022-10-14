import Footer from '@/components/base/Footer';
import Header from '@/components/base/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>とっぷ</title>
      </Head>
      <Header />
      <div className="fixed top-[50%] left-[50%]">
        <Link href="/home" passHref>
          <a className="nes-btn">我が家へ</a>
        </Link>
      </div>
      {/* <div className="box">
        <div className="wave"></div>
      </div> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
