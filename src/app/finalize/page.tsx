import UsernameForm from "@/app/_components/usernameForm";
import { api } from "@/trpc/server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Finalize() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/");
  } else {
    const userRecord = await api.user.get.query({ userId: user.id });
    if (userRecord) {
      redirect("/game");
    }
  }

  return <UsernameForm />;
}
