import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet expert sets you up for a scrumptious dinner utilizing the best and freshest ingredients.our Restaurant legacy comes from The parent  Restaurant, which was built in 1991.

we  worked for people in general and has advanced into a combination of exquisite chic and contemporary fine charge.
Enjoy our dazzling dishes and make the most of your eating background with us!
We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet expert sets you up for a scrumptious dinner utilizing the best and freshest ingredients.our Restaurant legacy comes from The parent  Restaurant, which was built in 1991.

we  worked for people in general and has advanced into a combination of exquisite chic and contemporary fine charge.
Enjoy our dazzling dishes and make the most of your eating background with us!
        </p>
        <br />
        <p>
        Our menu offers something for everybody, from the light passage of plates of mixed greens and little nibbles to the inconceivable  T Bone steak. Our steaks are sliced in-house to guarantee flawlessness and expertly barbecued at 2,000 degrees.

We will probably give excellent client benefit, the best quality fixings, and a noteworthy affair, whether it’s an uncommon occasion, an easygoing social event of companions, or a sentimental night out on the town.we have different kind of foods
that are very tasty and yummy.we are offering you a food that tastes like your home made foods.you will enjoy our foods once you taste it.so order your favourite foodswithout any delay.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
