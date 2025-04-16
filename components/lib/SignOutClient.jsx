import { signOut } from "@/auth";
import Button from "../ui/Button";

export default function SignOutClient({ children }) {
  return <Button onClick={() => signOut("google")}>{children}</Button>;
}
