import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 60,
    updateAge: 0,
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;

        const data = {
          email: "bisnis15@gmail.com",
          password: "Bisnis123",
        };
        try {
          const res = await axios.post("https://api.adaremit.co.id/api/v1/login", data);

          if (res.data.success) {
            return {
              ...res.data.data.user,
              access_token: res.data.jwt,
            };
          } else {
            throw new Error(res.data.message);
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },

  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        token.user = {
          id: user.user_id,
          email: user.user_email,
          firstName: user.first_name,
          lastName: user.last_name,
          type: user.type_user,
        };
        token.token = user.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = { ...token.user };
      session.token = token.token;

      return session;
    },
  },
};

export default NextAuth(authOptions);
