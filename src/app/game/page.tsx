import { Heading1, Heading2 } from "@/app/_components/ui/headings";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function GamePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/");
  }
  return (
    <>
      <Heading1>skiNEXT</Heading1>
      <Heading2>Game</Heading2>
    </>
  );
}
