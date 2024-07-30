"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  
  useEffect(() => {
    setTimeout(() => router.push("/1"), 3000);
  }, []);

  return (
    <section className="bg-white h-dvh pt-20 fixed top-0 left-0 w-full ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-6xl tracking-tight font-extrabold lg:text-7xl text-gray-600">
            404
          </h1>
          <p className="mb-20 text-3xl tracking-tight font-bold text-primary md:text-4xl">
            Хуудас олдсонгүй.
          </p>
          <Link
            href="/"
            className="inline-flex text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4"
          >
            Нүүр хуудас руу буцах
          </Link>
        </div>
      </div>
    </section>
  );
}
