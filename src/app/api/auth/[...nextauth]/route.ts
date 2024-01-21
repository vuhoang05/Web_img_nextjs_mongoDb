import CredentialsProvider from "next-auth/providers/credentials"
import { Account, User as AuthUser } from "next-auth";
import nextAuth from "next-auth";
import User from '@/models/User';
import bcrypt from "bcryptjs";
import connect from '@/app/utils/db';
import NextAuth from "next-auth/next";

export const authOptions: any = {
    secret: process.env.SECRET,
    providers: [
        CredentialsProvider({

            id: "credentials",
            name: 'Credentials',

            credentials: {
                email: { label: "Email", type: "text", placeholder: "haong@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any) {

                await connect();
                try {

                    const user = await User.findOne({ email: credentials.email });
                    if (user) {
                        const isPassWordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        )
                        if (isPassWordCorrect) {
                            return user;
                        }
                    }

                }
                catch (err: any) {
                    throw new Error(err);

                }
            }
        })
    ]
}
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };