"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function getUser() {
  const { getUser } = getKindeServerSession();
  return getUser();
}
