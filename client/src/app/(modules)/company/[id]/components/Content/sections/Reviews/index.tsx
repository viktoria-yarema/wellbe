"use client";

import FlexColumn from "@/app/_components/Layout/FlexColumn";
import CommentCard from "./components/CommentCard";
import { getCompanyComments } from "@/app/(entities)/comments/api/getCompanyComments";
import { useQuery } from "@tanstack/react-query";

type ReviewsProps = {
  companyId: string;
};

export default function Reviews({ companyId }: ReviewsProps) {
  const { data: comments = [] } = useQuery({
    queryKey: ["comments", { companyId }],
    queryFn: async () => await getCompanyComments(companyId),
  });

  if (!comments.length) {
    return "No comments received";
  }

  return (
    <FlexColumn>
      {comments.map((comment) => (
        <div key={comment.id}>
          <CommentCard comment={comment} />
        </div>
      ))}
    </FlexColumn>
  );
}
