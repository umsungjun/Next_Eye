import Image from "next/image";
import Link from "next/link";

// import { EyeIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="flex w-dvw h-dvh">
      {/* 메인 로고 */}
      <div className="flex-1 flex flex-col justify-center items-center">
        {/* <EyeIcon className="size-96 text-blackh-full " /> */}
        <Image src={"/main_logo.webp"} width={450} height={450} alt="EyeLogo" />
      </div>
      <div className="flex-1 flex flex-col gap-10 justify-center">
        <h1 className="text-6xl font-semibold">우리가 눈으로 보는 모든 것</h1>
        <h2 className="text-3xl font-medium">지금 가입하세요.</h2>
        <Link
          href="/i/flow/signup"
          className="bg-black text-white rounded-3xl w-56 py-3 text-center shadow-md"
        >
          계정 만들기
        </Link>
        <h3 className="text-xl font-medium">이미 눈에 가입하셨나요?</h3>
        <Link
          href="/i/flow/login"
          className="bg-black text-white rounded-3xl w-56 py-3 text-center shadow-md"
        >
          로그인
        </Link>
      </div>
    </div>
  );
}
