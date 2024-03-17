"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col items-center border-blue-500 border-2 p-4 rounded-md">
        <h1 className="text-5xl font-bold mb-5 text-blue-300">
          SHOPPING LIST APP
        </h1>

        {user && (
          <p className="text-xl mb-2">Welcome back{user.displayName}!</p>
        )}
        <div>
          {user ? (
            <div className="flex flex-col items-center">
              <div>
                <a className=" hover:text-blue-900 border border-blue-500 bg-blue-500 rounded-md p-1">
                  <Link href="/week-8/shopping-list">
                    Proceed to Shopping List 🛒
                  </Link>
                </a>
              </div>
              <button
                onClick={firebaseSignOut}
                className="hover:underline mt-10 text-white"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <img src="/github.png" className="w-5 mr-2" />
              <button
                onClick={gitHubSignIn}
                className="hover:underline cursor-pointer text-white"
                style={{ backgroundColor: "#333" }}
              >
                Sign in with GitHub 🔑
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
