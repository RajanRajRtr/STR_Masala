import {
  styled,
  TextField,
} from "@mui/material";

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
