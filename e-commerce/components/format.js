import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const rgbValues = { r: 28, g: 30, b: 32 }; // Example RGB values (Red color)
const backgroundColor = `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})`;

export default function Format({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div
        className={
          "flex w-screen h-screen items-center font-Alliance"
        }
        style={{ backgroundColor }}
      >
        <div className={"text-center w-full"}>
          <div className={"text-4xl font-bold text-white mb-10"}>
            You are not signed in
          </div>
          <button
            className={"bg-white text-black px-4 py-2 rounded-lg"}
            onClick={() => signIn("google")}
          >
            Sign in
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={"h-full flex font-Alliance"} style={{ backgroundColor }}>
      <Nav />

      <div className={"bg-white flex-grow mt-2 mr-2 "}>
        <div className="flex">
          <div
            className={
              "text-4xl font-bold text-black ml-3 mt-3 mb-3 w-full h-screen"
            }
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
