"use client";

import { useSession } from "next-auth/react";
import SignInClient from "./lib/SignInClient";
import SignOutClient from "./lib/SignOutClient";

export default function AccountComponent() {
  const { data: session } = useSession();
  console.log(session);
  return !session?.user ? (
    <SignInClient>Sign in with Google</SignInClient>
  ) : (
    <SignOutClient>Sign out</SignOutClient>
  );
}
