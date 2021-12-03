import Head from 'next/head'
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Home() {
  const [color, setColor] = useState(["signin"]);

  // const handleChange = () => {
  //   setColor("SignIn");
  // };

  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Next Authentication</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-34xl font-bold mb-3">
          Next Auth project --{session?.user?.username}
        </h1>

        <div className="space-x-4">
          {session ? (
            <button
              onClick={signOut}
              className="hover:bg-purple-900 hover:text-white bg-blue-500 text-white rounded px-2 py-2"
            >
              Signout
            </button>
          ) : (
            <button
              // onClick={handleChange}
              onClick={signIn}
              className="hover:bg-purple-900 hover:text-white bg-blue-500 text-white rounded px-2 py-2 "
            >
              {color}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
