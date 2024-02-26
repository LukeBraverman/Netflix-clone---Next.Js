import {NextAuthOptions} from "next-auth";
import prisma from "@/app/utils/db";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import {PrismaAdapter} from "@next-auth/prisma-adapter";

// https://stackoverflow.com/questions/76503606/next-auth-error-adapter-is-not-assignable-to-type-adapter-undefined/76543393#76543393?newreg=b1fb4eebb0804cf1bfa01cf96eb7f1b0
export const authOptions = {
   adapter: PrismaAdapter(prisma),
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM
        }),
    ]

} satisfies NextAuthOptions
