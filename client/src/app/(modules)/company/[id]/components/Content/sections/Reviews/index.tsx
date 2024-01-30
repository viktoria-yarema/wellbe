"use client";

import FlexColumn from "@/app/_components/Layout/FlexColumn";
import CommentCard from "./components/CommentCard";
import { getCompanyComments } from "@/app/(entities)/comments/api/getCompanyComments";
import { useQuery } from "@tanstack/react-query";
import CommentsSkeleton from "./loading";

type ReviewsProps = {
  companyId: string;
};

export default function Reviews({ companyId }: ReviewsProps) {
  const { data: comments = [], isLoading } = useQuery({
    queryKey: ["comments", { companyId }],
    queryFn: async () => await getCompanyComments(companyId),
  });

  if (isLoading) {
    return <CommentsSkeleton />;
  }

  return (
    <FlexColumn>
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
      {!comments.length && "No comments received"}
    </FlexColumn>
  );
}
