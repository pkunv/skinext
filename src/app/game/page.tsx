import Game from "@/app/_components/game";
import { Heading1, Heading2 } from "@/app/_components/ui/headings";
import { api } from "@/trpc/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function GamePage() {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();
  const dbUser = await api.user.get.query({ userId: kindeUser!.id });
  if (!dbUser) redirect("/finalize");

  return (
    <>
      <Heading1>skiNEXT</Heading1>
      <Heading2>Game</Heading2>
      <Game />
    </>
  );
}
