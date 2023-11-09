import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex justify-center items-center">
        <p className=" ">Avukat Ebru KARACA</p>
      </div>
      <div className="flex justify-center items-center"> </div>

      <h1 className=" text-xl sm:text-3xl leading-loose max-w-[800px] ">
        Sitemiz yapım aşamasındadır. Tüm sorularınız için{" "}
        <span className=" underline ">
          <a
            href={"mailto:avebrukoksal@gmail.com"}
            target="_blank"
            className="text-red-400"
          >
            avebrukoksal@gmail
          </a>
        </span>{" "}
        adresinden bize ulaşabilirsiniz.
      </h1>
    </main>
  );
}
