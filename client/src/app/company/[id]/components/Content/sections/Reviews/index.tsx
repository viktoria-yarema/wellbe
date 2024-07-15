"use client";

import FlexColumn from "@/shared/components/Layout/FlexColumn";
import CommentCard from "./components/CommentCard";
import CommentsSkeleton from "./loading";
import { useCompanyComments } from "@/entities/comments/queries/useCompanyComments";

type ReviewsProps = {
  companyId: string;
};

export default function Reviews({ companyId }: ReviewsProps) {
  const { data: comments = [], isLoading } = useCompanyComments(companyId);

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
