import Head from 'next/head';
import FaceIcon from '@/components/Icon/FaceIcon';

export default function Header() {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <div className="h-14 bg-sky-900 px-6 flex items-center">
        <FaceIcon />
        <div className="flex-1 text-white text-2xl font-bold text-center">
          <h1 className="inline-block hover:opacity-50 cursor-pointer">MyPlayGround</h1>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white hover:opacity-50 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </>
  );
}
