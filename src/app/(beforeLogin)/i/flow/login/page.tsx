"use client";

import { useState } from "react";

import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function LoginModal() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const onSubmit = () => {};
  const onClickClose = () => {};

  const onChangeId = () => {};

  const onChangePassword = () => {};

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
          <div>로그인하세요.</div>
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
          </div>
          {/* <div>{message}</div> */}
          <button
            className="mt-5 w-full h-12 rounded-3xl text-lg cursor-pointer border-none disabled:opacity-50 bg-black text-white"
            // disabled={!id && !password}
          >
            로그인하기
          </button>
        </form>
      </div>
    </div>
  );
}
