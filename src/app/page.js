import { Box, Grid } from "@mui/material";
import MainHeader from "./components/Hedear/MainHeader";
import Start from "./components/Start/Start";
import MainFeatures from "./components/Features/MainFeatures";
import MainWhy4x from "./components/Why4xFunder/MainWhy4x";
import Main5Steps from "./components/5Steps/MainFSteps";
import MainChallenges from "./components/Challenges/MainChallenges";
import SlideShow from "./components/Slides/SlideShow";
import BlogSection from "./components/Blog/BlogSection";
import MainTraderx from "./components/Traderx/MainTraderx";
import MainUserComments from "./components/UserComments/MainUserComments";
import MainNewChallenges from "./components/NewChallenges/MainNewChallenges";
import MainDisclaimer from "./components/Disclaimer/MainDisclaimer";
import MainFooter from "./components/Footer/MainFooter";

const page = () => {
  return (
    <Grid width={"100%"}>
      <MainHeader />
      <Start />
      <MainFeatures />
      <MainWhy4x />
      <Main5Steps />
      <MainChallenges />
      <SlideShow />
      <BlogSection />
        <MainTraderx />
      <MainUserComments />
      <MainNewChallenges />
      <MainDisclaimer />
      <MainFooter />
    </Grid>
  );
};

export default page;
