import { MoreHoriz } from "@mui/icons-material";
import { Card, Grid, IconButton, MenuItem, styled, TextField } from "@mui/material";
import { FlexBetween } from "app/components/FlexBox";
import { H3, Span } from "app/components/Typography";
import StatCard3 from "./shared/StatCard3";

const AnalyticsRoot = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const Analytics2 = () => {
  return (
    <AnalyticsRoot>
     

      <StatCard3 />

      


    </AnalyticsRoot>
  );
};

export default Analytics2;
