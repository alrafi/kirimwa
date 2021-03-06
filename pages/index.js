import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendWA = () => {
    console.log("kirim wa", phoneNumber);
    window.open(
      `https://api.whatsapp.com/send/?phone=62${phoneNumber}&text&app_absent=0`,
      "_self"
    );
  };

  const handleOnChangeNumber = (e) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setPhoneNumber(e.target.value);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center px-2">
      <Head>
        <title>kirimWA | Kirim WA tanpa perlu save nomor</title>
        <meta name="description" content="Kirim WA tanpa perlu save nomor" />
        <link rel="icon" href="/favicon.ico" />

        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />

        <link rel="manifest" href="/manifest.json" />
        <link href="/favicon.ico" rel="icon" type="image/png" sizes="16x16" />
        <link href="/favicon.ico" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icons.png" />
        <meta name="theme-color" content="#317EFB" />
      </Head>

      <main className="flex flex-col justify-center items-center">
        <h1 className="text-4xl lg:text-5xl text-center font-bold">kirimWA</h1>
        <h2 className="text-center">
          Kirim WA kemana aja, tanpa perlu save nomor
        </h2>
        <div className="flex items-center justify-center w-6/12 lg:w-2/12 mt-12 mb-2">
          <input
            type="text"
            value="+62"
            className=" bg-gray-50 border border-gray-300 text-gray-400 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 p-2.5 w-14 text-base mr-1"
            disabled
          />
          <input
            type="text"
            onChange={(e) => handleOnChangeNumber(e)}
            value={phoneNumber}
            className=" bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 p-2.5 text-base"
            placeholder="81200001111"
            pattern="\d*"
          />
        </div>
        <span className="text-sm italic text-gray-400 mb-8">
          *) Tidak perlu memasukkan angka 0 di depan
        </span>
        <button
          className="hover:bg-emerald-400 hover:border-emerald-400 bg-emerald-300 text-white rounded-full text-sm sm:text-xl uppercase py-2 px-12 font-medium border-2 border-emerald-300 transition-all active:shadow-none focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-300 disabled:border-gray-300"
          onClick={sendWA}
          disabled={phoneNumber.length === 0}
        >
          Kirim WA
        </button>
      </main>
      <footer className="fixed bottom-0 w-full flex flex-col items-center justify-center py-4 text-gray-900">
        <p>kirimWA ?? 2022</p>
        <p className="text-xs text-gray-400">
          Made with Love.{" "}
          <a
            href="https://hafisalrafi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hafis Alrafi
          </a>
        </p>
      </footer>
    </div>
  );
}
