import Calendar from '@/components/common/calendar';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

type Props = {};

export default function Home({}: Props) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('挨拶', 'ようこそ。ローカルストレージへ！');
    localStorage.setItem('質問', '仕事中？まさか自宅警備員？');
  }
  return (
    <>
      <Head>
        <title>welcome | 我が家</title>
      </Head>
      <div className="relative">
        <div className="fixed left-0 top-0 h-screen w-screen z-[-1]">
          <Image src="images/frame.png" layout="fill" alt="frame" />
        </div>
        <div className="fixed bottom-0 left-0 w-screen z-[-2]">
          <div className="relative h-[30vh] border-x-orange-100">
            <Image src="images/wall.png" layout="fill" alt="wall" />
          </div>
          <div className="relative h-[35vh]">
            <Image src="images/floor.png" layout="fill" alt="floor" />
          </div>
          <div className="relative h-[35vh]">
            <Image src="images/floor.png" layout="fill" alt="floor2" />
          </div>
        </div>

        <div className="absolute space-x-2 top-10 left-[5%] flex items-center">
          <Image width={'200px'} height="100px" src="images/window.png" alt="window" />
          <Calendar />
        </div>

        <div className="absolute top-[180px] px-[20px] md:px-[45px] lg:px-[60px] w-screen flex flex-col lg:flex-row justify-between">
          <div className="flex items-start space-x-10">
            <div>
              <section className="message -right">
                <div className="nes-balloon from-left">
                  <p>よぉ</p>
                </div>
              </section>
              <i className="nes-octocat animate"></i>
            </div>
            <div>
              <Image width="300px" height="300px" src="images/desk.png" alt="desk" />
            </div>
          </div>
          <div className="lg:pt-[100px] ml-auto">
            <Image width="350px" height="400px" src="images/bed.png" alt="bed" />
          </div>
        </div>
      </div>
    </>
  );
}
