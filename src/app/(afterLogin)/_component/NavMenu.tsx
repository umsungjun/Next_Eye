"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

/* Icon */
import { HomeIcon } from "@heroicons/react/24/outline";
import { HomeIcon as SolidHomeIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon as SolidMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon as SolidEnvelopeIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon as SolidUserCircleIcon } from "@heroicons/react/24/solid";

export default function NavMenu() {
  const segment = useSelectedLayoutSegment(); // ex) home
  console.log(segment);
  const me = {
    // 임시 정보
    id: "umsungjun",
  };

  return (
    <div className="flex flex-col">
      <Link href="/home">
        <div className="navMenu">
          {segment === "home" ? (
            <SolidHomeIcon className="w-6" />
          ) : (
            <HomeIcon className="w-6" />
          )}
          <span className={segment === "home" ? "font-bold" : ""}>홈</span>
        </div>
      </Link>
      <Link href="/explore">
        <div className="navMenu">
          {segment === "explore" ? (
            <SolidMagnifyingGlassIcon className="w-6" />
          ) : (
            <MagnifyingGlassIcon className="w-6" />
          )}
          <span className={segment === "explore" ? "font-bold" : ""}>
            탐색하기
          </span>
        </div>
      </Link>
      <Link href="/messages">
        <div className="navMenu">
          {segment === "messages" ? (
            <SolidEnvelopeIcon className="w-6" />
          ) : (
            <EnvelopeIcon className="w-6" />
          )}
          <span className={segment === "messages" ? "font-bold" : ""}>
            쪽지
          </span>
        </div>
      </Link>
      {me.id && (
        <Link href={`/${me?.id}`}>
          <div className="navMenu">
            {segment === me.id ? (
              <SolidUserCircleIcon className="w-6" />
            ) : (
              <UserCircleIcon className="w-6" />
            )}
            <span className={segment === me.id ? "font-bold" : ""}>프로필</span>
          </div>
        </Link>
      )}
    </div>
  );
}
