"use client";

import { signIn } from "next-auth/react";
import Button from "../ui/Button";

export default function SignInClient({ children }) {
  return <Button onClick={() => signIn("google")}>{children}</Button>;
}
