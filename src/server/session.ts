import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { env } from "@/env";
import type { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";

const globalForKinde = globalThis as unknown as {
  kinde: { user: KindeUser | null };
};

export const session = globalForKinde.kinde ?? {
  user: await getKindeServerSession().getUser(),
};

if (env.NODE_ENV !== "production") globalForKinde.kinde = session;
