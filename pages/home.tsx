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
        <div className="fixed left-0 top-0 h-[100%] w-screen z-[-1]">
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
        <div className="space-x-2 pt-[50px] pl-[20px] md:pl-[60px] h-[15vh] flex items-center">
          <div className="relative w-[150px] h-[75px] md:w-[200px] md:h-[100px]">
            <Image src="images/window.png" alt="window" layout="fill" />
          </div>
          <Calendar />
        </div>

        <div className="overflow-hidden h-[85vh] px-[20px] md:px-[45px] lg:px-[60px] flex flex-col lg:flex-row justify-between">
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
          <div className="relative lg:mt-[150px] mb-10 ml-auto w-[250px] h-[300px] sm:w-[350px] sm:h-[400px]">
            <Image src="images/bed.png" alt="bed" layout="fill" />
          </div>
        </div>
      </div>
    </>
  );
}
