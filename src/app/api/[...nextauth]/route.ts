import NextAuth from "next-auth"

const handler = new NextAuth({
  providers: [
    //TODO: Apple, Discord, Email, Facebook (?), Google, Instagram, Reddit
  ]
});

export {handler as GET handler as POST}
