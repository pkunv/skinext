import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { TRPCError } from "@trpc/server";

export const userRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.user.findUnique({
        where: { id: input.userId },
      });
    }),
  upsert: publicProcedure
    .input(z.object({ username: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // TODO: implement ctx.session.user
      const { getUser } = getKindeServerSession();
      const user = await getUser();
      if (!user) throw new TRPCError({ code: "UNAUTHORIZED" });
      return ctx.db.user.upsert({
        where: { id: user.id },
        create: { id: user.id, name: input.username },
        update: { name: input.username },
      });
    }),
});
