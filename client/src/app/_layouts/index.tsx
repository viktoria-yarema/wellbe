"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { useUserStore } from "@/app/(entities)/user/store/useUserStore";
import PrivateLayout from "./PrivateLayout";
import AuthLayout from "./AuthLayout";
import { queryClient } from "../_global/queryClient";
import { lazy } from "react";
import { GlobalSideEffects } from "../_global/GlobalSideEffects";
import { usePathname } from "next/navigation";
import PageDetailsLayout from "./PageDetailsLayout";

const LazyReactQueryDevtools = lazy(() =>
  import("@tanstack/react-query-devtools").then((module) => ({
    default: module.ReactQueryDevtools,
  }))
);

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const { firebaseUser } = useUserStore();
  // TODO: Refactor it
  const pathname = usePathname();
  const isNestedPAge = pathname.split("/").length > 2;

  return (
    <QueryClientProvider client={queryClient}>
      {<GlobalSideEffects />}
      {firebaseUser && !isNestedPAge && (
        <PrivateLayout>{children}</PrivateLayout>
      )}
      {firebaseUser && isNestedPAge && (
        <PageDetailsLayout>{children}</PageDetailsLayout>
      )}
      {firebaseUser === null && <AuthLayout />}
      {firebaseUser === false && "Loading..."}
      <LazyReactQueryDevtools />
    </QueryClientProvider>
  );
}
