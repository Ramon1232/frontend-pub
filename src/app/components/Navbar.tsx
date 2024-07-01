"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</a>
          </Link>
          {session?.user ? (
            <>
              <Link href="/dashboard" legacyBehavior>
                <a className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Dashboard</a>
              </Link>
              <button
                onClick={() => signOut()}
                className="text-white px-3 py-2 rounded-md text-sm font-medium bg-red-600 hover:bg-red-700"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" legacyBehavior>
                <a className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Login</a>
              </Link>
              <Link href="/register" legacyBehavior>
                <a className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Register</a>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
