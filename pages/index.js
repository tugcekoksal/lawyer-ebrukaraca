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

      <div className="relative mt-[10px] z-[9999]  flex w-[60%] place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full  before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <h1 className="text-3xl leading-loose ">
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
      </div>
    </main>
  );
}
