import { Box, Card, Grid, Icon, IconButton, useTheme } from "@mui/material";
import { H3, Paragraph } from "app/components/Typography";

const StatCard3 = () => {
  const statList = [
    {
      icon: "people",
      count: 95,
      title: "Number of Brands",
    },
    {
      icon: "location_on_outlined",
      count: 942,
      title: "Number of Categories",
    },
    {
      icon: "keyboard_voice",
      count: 4,
      title: "Number of Users",
    },
    {
      icon: "card_giftcard",
      count: 20965,
      title: "Number of Products",
    },
    {
      icon: "location_on_outlined",
      count: "9cr",
      title: "Total Revenue",
    },
    {
      icon: "keyboard_voice",
      count: 25,
      title: "Total Orders",
    },
    {
      icon: "card_giftcard",
      count: 0,
      title: "Cancelled Orders",
    },
  ];
  const { palette } = useTheme();
  const textMuted = palette.text.secondary;

  return (
    <div>
      <Grid container spacing={3}>
        {statList.map((item, ind) => (
          <Grid key={item.title} item md={3} sm={6} xs={12}>
            <Card elevation={3} sx={{ p: "20px", display: "flex" }}>
              <div>
                <IconButton
                  size="small"
                  sx={{
                    padding: "8px",
                    background: "rgba(0, 0, 0, 0.01)",
                  }}
                >
                  <Icon sx={{ color: textMuted }}>{item.icon}</Icon>
                </IconButton>
              </div>
              <Box ml={2}>
                <H3 sx={{ mt: "-4px", fontSize: "32px" }}>{item.count.toLocaleString()}</H3>
                <Paragraph sx={{ m: 0, color: textMuted }}>{item.title}</Paragraph>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StatCard3;
