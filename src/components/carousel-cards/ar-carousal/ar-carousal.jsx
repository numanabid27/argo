import BazaarImage from "components/BazaarImage";
import { StyledRoot } from "./styles";

export default function AgroMercaCarousal({
  imgUrl
}) {
  return (
    <StyledRoot>
      <BazaarImage
        src={imgUrl}
        alt="apple-watch-1"
        sx={{
          mx: "auto",
          maxHeight: 400,
          display: "block",
          maxWidth: "100%",
          borderRadius:"30px"
        }}
      />
    </StyledRoot>
  );
}
