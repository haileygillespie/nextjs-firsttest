import Image from "next/image";
import Nav from "./components/nav";

export default function Home() {
  return (
    <div className="center">
      <main>
        <h1>TEST</h1>
        <Image
            className="center"
            src="/cat.png"
            alt="cat"
            width={200}
            height={200}
            priority
          />
          <Nav>
            <p>a child element</p>
          </Nav>
      </main>
    </div>
  );
}
