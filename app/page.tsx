import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>TEST</h1>
      <p>hi</p>
      <Image
          className=""
          src="/cat.png"
          alt="cat"
          width={50}
          height={50}
          priority
        />
    </div>
  );
}
