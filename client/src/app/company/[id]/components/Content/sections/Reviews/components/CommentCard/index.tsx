import Typography from "@mui/material/Typography";
import { StyledCommentCard } from "./styled";
import Flex from "@/shared/components/Layout/Flex";
import { Comment } from "@/entities/comments/types";
import Avatar from "@/shared/components/Avatar";
import FlexColumn from "@/shared/components/Layout/FlexColumn";
import { format } from "date-fns";

type CommentProps = {
  comment: Comment;
};

export default function CommentCard({ comment }: CommentProps) {
  const { reviewerId, reviewerName, reviewerImage, description, date, rate } =
    comment;

  // @ts-ignore
  const postedDate = new Date(date._seconds * 1000);
  const normalizedTate = format(postedDate, "MMMM dd, yyyy");

  return (
    <StyledCommentCard>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex columnGap={"0.5rem"} alignItems={"center"}>
          <Avatar src={reviewerImage} alt={reviewerId} size={"xs"} />
          <FlexColumn>
            <Typography variant="bodySRegular">{reviewerName}</Typography>
            <Typography variant="bodyXSRegular" color={"text.secondary"}>
              {normalizedTate}
            </Typography>
          </FlexColumn>
        </Flex>
        <Typography variant="bodyMMedium">Rate: {rate}</Typography>
      </Flex>
      <Typography variant="bodyXSRegular" color={"text.secondary"}>
        {description}
      </Typography>
    </StyledCommentCard>
  );
}
