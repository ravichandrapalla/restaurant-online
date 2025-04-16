"use client";

import { signIn } from "next-auth/react";
import Button from "../ui/Button";

export default function SignIn() {
  return <Button onClick={() => signIn("google")}></Button>;
}
