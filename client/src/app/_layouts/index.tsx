"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { useUserStore } from "@/app/(entities)/user/store/useUserStore";
import PrivateLayout from "./PrivateLayout";
import AuthLayout from "./AuthLayout";
import { queryClient } from "../_global/queryClient";
import { lazy } from "react";
import { GlobalSideEffects } from "../_global/GlobalSideEffects";

const LazyReactQueryDevtools = lazy(() =>
  import("@tanstack/react-query-devtools").then((module) => ({
    default: module.ReactQueryDevtools,
  }))
);

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const { firebaseUser, user } = useUserStore();
  console.log(firebaseUser, "firebaseUser");
  console.log(user, "user");

  return (
    <QueryClientProvider client={queryClient}>
      {<GlobalSideEffects />}
      {firebaseUser && <PrivateLayout>{children}</PrivateLayout>}
      {firebaseUser === null && <AuthLayout />}
      {firebaseUser === false && "Loading..."}
      <LazyReactQueryDevtools />
    </QueryClientProvider>
  );
}
