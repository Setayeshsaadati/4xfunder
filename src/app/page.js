import { Box } from "@mui/material"
import BlogSection from "./components/Blog/BlogSection"
import MainTraderx from "./components/Traderx/MainTraderx"
import MainUserComments from "./components/UserComments/MainUserComments"
import MainNewChallenges from "./components/NewChallenges/MainNewChallenges"
import MainDisclaimer from "./components/Disclaimer/MainDisclaimer"
import MainFooter from "./components/Footer/MainFooter"
import Start from "./components/Start/Start"
import MainFeatures from "./components/Features/MainFeatures"
import MainChallenges from "./components/Challenges/MainChallenges"
import SlideShadow from "./components/Slides/SlideShow"
import MainHeader from "./components/Hedear/MainHeader"
import MainFSteps from "./components/FiveSteps/MainFSteps"
import ContentWrapper from "./components/MainContentWrapper/ContentWrapper"
import FullWidthWrapper from "./components/MainContentWrapper/FullWidthWrapper"
import MainWhy4x from "./components/WhyFourxFunder/MainWhy4x"

const page = () => {
  return (
    <Box width={'100%'}>
      <ContentWrapper>
        <MainHeader />
        <Start />
        <MainFeatures />
        <MainWhy4x />
        <MainFSteps />
        <MainChallenges />
        <SlideShadow />
        <BlogSection />
      </ContentWrapper>

      <FullWidthWrapper>
        <MainTraderx />
      </FullWidthWrapper>

      <ContentWrapper>
        <MainUserComments />
      </ContentWrapper>

      <FullWidthWrapper>
        <MainNewChallenges />
      </FullWidthWrapper>

      <ContentWrapper>
        <MainDisclaimer />
      </ContentWrapper>

      <MainFooter />
    </Box>
  )
}

export default page
