import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";


export const inviteesRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
      name: z.string(),
      person: z.number(),
      rsvp: z.boolean()
    }))
    .mutation(async({ctx, input})=>{
      const post = await ctx.prisma.invitees.create({
        data: {
          name: input.name,
          person: input.person,
          rsvp: input.rsvp,
        }
      })

      if (!post) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });

      return post
    })
});
