import Link from "next/link";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface AfterLoginLayoutProps {
  children: React.ReactNode;
}

export default function AfterLoginLayout({ children }: AfterLoginLayoutProps) {
  return (
    <div className="flex items-stretch">
      <header className="flex items-end flex-col flex-grow">
        <section className="w-[275] h-dvh">
          <div className="fixed w-[275] h-dvh flex flex-col">
            <Link className="inline-block h-14 mt-1" href="/home">
              <Image
                src={"/main_logo.webp"}
                width={40}
                height={40}
                alt="EyeLogo"
              />
            </Link>
            <nav className="flex-1">
              <ul className="list-none"></ul>
              <Link
                href="/compose/tweet"
                className="my-4 flex justify-center items-center h-12 shadow-md bg-black w-56 border-none text-white font-bold text-lg rounded-3xl"
              >
                게시하기
              </Link>
            </nav>
          </div>
        </section>
      </header>
      <div className="flex items-start h-dvh flex-col flex-grow">
        <div className="h-full w-[990] flex justify-between">
          <main className="w-[600] h-[200dvh]">{children}</main>
          <section className="w-[350] h-full">
            <div className="mb-14 w-[350]">
              <form className="fixed h-10 w-[350] rounded-3xl border border-solid mt-1 mb-3 flex items-center">
                <MagnifyingGlassIcon className="size-5 ml-5 fill-[#536471]" />
                <input
                  type="search"
                  className="outline-none bg-inherit border-none p-2 ml-1"
                />
              </form>
            </div>
            <div className="text-xl font-bold border border-solid rounded-2xl my-3 py-3 px-4">
              <h3 className="pb-3 ">팔로우 추천</h3>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
