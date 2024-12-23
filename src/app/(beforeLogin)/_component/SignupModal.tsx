"use client";

import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { XMarkIcon } from "@heroicons/react/24/solid";

export default function SignUpModal() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState<File>();

  const router = useRouter();
  const onClickClose = () => {
    router.back();
  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };
  const onChangeNickname: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNickname(e.target.value);
  };
  const onChangeImageFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.files && setImageFile(e.target.files[0]);
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:9090/api/users", {
      method: "post",
      body: JSON.stringify({
        id,
        nickname,
        image,
        password,
      }),
      credentials: "include",
    })
      .then((response: Response) => {
        console.log(response.status);
        if (response.status === 200) {
          router.replace("/home");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.4)]">
      <div className="bg-white relative w-[550] px-20 py-12 rounded-2xl flex flex-col gap-5">
        <div className="flex justify-center">
          <Image
            src={"/main_logo.webp"}
            width={100}
            height={100}
            alt="EyeLogo"
          />
        </div>
        <button onClick={onClickClose} className="absolute top-4 left-4">
          <XMarkIcon className="text-black size-8 font-black" />
        </button>
        <div className="text-3xl font-bold">
          <div>계정을 생성하세요.</div>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col flex-1">
          <div className="flex-1">
            <div className="relative flex flex-col h-16">
              <label
                className="w-full inline-block absolute top-0 border border-solid border-black rounded text-xs h-14 pt-2 pb-0 px-2.5"
                htmlFor="id"
              >
                아이디
              </label>
              <input
                id="id"
                className="w-full text-lg mt-2 p-3 pt-4 outline-none"
                value={id}
                onChange={onChangeId}
                type="text"
                placeholder=""
              />
            </div>
            <div className="relative flex flex-col h-16">
              <label
                className="w-full inline-block absolute top-0 border border-solid border-black rounded text-xs h-14 pt-2 pb-0 px-2.5"
                htmlFor="password"
              >
                비밀번호
              </label>
              <input
                id="password"
                className="w-full text-lg mt-2.5 p-2.5 pt-3 outline-none"
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder=""
              />
            </div>
            <div className="relative flex flex-col h-16">
              <label
                className="w-full inline-block absolute top-0 border border-solid border-black rounded text-xs h-14 pt-2 pb-0 px-2.5"
                htmlFor="nickname"
              >
                닉네임
              </label>
              <input
                id="nickname"
                className="w-full text-lg mt-2.5 p-2.5 pt-3 outline-none"
                value={nickname}
                onChange={onChangeNickname}
                type="string"
                placeholder=""
              />
            </div>
            <div className="relative flex flex-col h-32">
              <span className="text-xs absolute top-2 left-2">프로필</span>
              <label className="w-full cursor-pointer text-neutral-500 hover:border-neutral-500 hover:text-black flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
                <svg
                  className="h-12 w-12"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input className="hidden" type="file" accept="image/*" />
              </label>
            </div>
          </div>
          {/* <div>{message}</div> */}
          <button
            className="mt-5 w-full h-12 rounded-3xl text-lg cursor-pointer border-none disabled:opacity-50 bg-black text-white"
            // disabled={!id && !password}
          >
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
}
