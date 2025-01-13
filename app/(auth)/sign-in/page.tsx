"use client";
import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={() => {}}
    />
  );
};

export default page;
