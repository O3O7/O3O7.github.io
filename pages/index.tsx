import Footer from '@/components/base/Footer';
import Header from '@/components/base/Header';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Hello Github Pages</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
