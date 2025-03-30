import Image from "next/image";

export default function Home() {
  return (
    <div className="center">
      <h1>TEST</h1>
      <p>hi</p>
      <Image
          className=""
          src="/cat.png"
          alt="cat"
          width={200}
          height={200}
          priority
        />
        <Nav>
          <p>a child element</p>
        </Nav>
    </div>
  );
}
