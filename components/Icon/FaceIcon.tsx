import Image from 'next/image';

export default function FaceIcon() {
  return (
    <div className="relative w-8 h-8 border rounded-full hover:opacity-50 cursor-grab">
      <Image
        className="rounded-full"
        layout="fill"
        objectFit="contain"
        alt="顔アイコン"
        src="https://github.com/Sakamoto-Shun.png"
      />
    </div>
  );
}
