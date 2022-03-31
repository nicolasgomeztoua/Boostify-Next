import { getSession } from "next-auth/react";
import React from "react";
import SignUp from "../components/SpecialSignUp/SignUp";
import SpecialOauth from "../utils/SpecialOauth";

const SpecialSignUp = ({ user }) => {
  if (user) {
    SpecialOauth(user.name, user.email, user.email, user.image);
  }

  return <SignUp />;
};

export default SpecialSignUp;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      props: {},
    };
  }
  const { user } = session;
  return {
    props: { user },
  };
}
