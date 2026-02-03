"use client";

import Link from "next/link";
import { useSession, useSignOut } from "better-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, isLoading } = useSession();
  const signOut = useSignOut();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-indigo-600">
                Kabootr
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/campaigns" className="text-gray-600 hover:text-gray-900">
                Campaigns
              </Link>
              <Link href="/contacts" className="text-gray-600 hover:text-gray-900">
                Contacts
              </Link>
              <Link href="/templates" className="text-gray-600 hover:text-gray-900">
                Templates
              </Link>
              <Link href="/analytics" className="text-gray-600 hover:text-gray-900">
                Analytics
              </Link>
              <Link href="/settings" className="text-gray-600 hover:text-gray-900">
                Settings
              </Link>
              <div className="ml-4 flex items-center space-x-3">
                {isLoading ? (
                  <span className="text-sm text-gray-500">Loading...</span>
                ) : session?.user ? (
                  <>
                    <span className="text-sm text-gray-700">{session.user.name || session.user.email}</span>
                    <button
                      onClick={handleSignOut}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <Link href="/login" className="text-sm text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
