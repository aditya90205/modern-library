"use client";
import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        email: "",
        password: "",
        fullName: "",
        universityId: 0,
        universityCard: "",
      }}
      onSubmit={() => {}}
    />
  );
};

export default page;
