import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Home() {
  return (
    <>
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        skiNEXT
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Start playing!</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Button>
            <LoginLink>Sign up and play</LoginLink>
          </Button>
          <Button variant="outline">
            <LoginLink>Sign in</LoginLink>
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
