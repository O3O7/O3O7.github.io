import Footer from '@/components/base/Footer';
import Header from '@/components/base/Header';
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="relative mx-auto">
        <div className="absolute top-0 left-0 z-[-1]">
          <Image src="images/home.png" width="1440" height="1024" />
        </div>

        <div className="absolute top-[180px] left-[10%]">
          <section className="message -right">
            <div className="nes-balloon from-left">
              <p>よぉ</p>
            </div>
          </section>
          <i className="nes-octocat animate"></i>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
