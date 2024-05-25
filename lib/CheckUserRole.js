import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export function CheckUserRole() {
  const { sessionClaims } = auth();

  console.log(sessionClaims);

  // Redirect if user's role is not "admin"
  if (sessionClaims?.metadata?.role === "admin") {
    return "admin";
  } else {
    return "user";
  }
}
