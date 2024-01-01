"use client";
import PrimaryButton from "@/app/_components/Buttons/PrimaryButton";
import FlexColumn from "@/app/_components/Layout/FlexColumn";
import { auth } from "@/app/firebase";
import TextField from "@mui/material/TextField";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ErrorMessage, Form, Formik } from "formik";

export default function LogIn() {
  const onSignIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password);
    // .then((userCredential) => {
    //   // Signed in
    //   const user = userCredential.user;
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    // });
  };

  return (
    <FlexColumn width={"100%"}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onSignIn(values.email, values.password);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <FlexColumn rowGap={"2.5rem"}>
              <FlexColumn rowGap={"1rem"}>
                <TextField
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessage name="email" component="div" />
                <TextField
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <ErrorMessage name="password" component="div" />
              </FlexColumn>
              <PrimaryButton title={"Log in"} type="submit" size="large" />
            </FlexColumn>
          </Form>
        )}
      </Formik>
    </FlexColumn>
  );
}
