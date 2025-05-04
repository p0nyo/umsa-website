import type { NextAuthOptions } from "next-auth";
import { supabase } from "@/lib/supabase";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "username",
                },
                password: {
                    label: "Password",
                    type: "text",
                    placeholder: "password",
                },
            },
            async authorize(credentials) {
                if (!credentials) return null;
                
                const { data, error } = await supabase
                .from("USERS")
                .select("*")
                .eq("name", credentials.username)
                .single();
                console.log(data);
                
                if (error || !data) return null;

                if (credentials?.username === data.name && credentials?.password === data.password) {
                    return data;
                } else {
                    return null;
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 60 * 60,
        updateAge: 10 * 60,
    },
    pages: {
        signIn: "/signin",
        signOut: "/signout", 
      },

}