import { Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/system";
import Navbar from "../Components/Common/Navbar";
import aboutus from "./aboutus.png";
import aboutline from "./aboutline.png";

export default function ButtonMUI() {
  return (
    <>
      <Navbar />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">Resume Builder</h2>
        <span>
          <img
            style={{ width: "200px", height: "50px" }}
            src={aboutline}
            alt="aboutline"
          />
        </span>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="2px"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify",
            }}
          >
            Welcome to our Resume Builder! Our dedicated team of seasoned
            professionals is here to assist job seekers in creating standout
            resumes and cover letters that set them apart from the competition.
            Our mission is to equip you with the necessary tools and resources
            to secure your dream job. <br />
            <br />
            At our Resume Builder, we are committed to delivering a
            high-quality, cost-effective solution to meet your job search
            requirements. Our team stays abreast of industry trends and best
            practices, ensuring that your resume is in expert hands. <br />
            <br />
            We sincerely appreciate your choice of our Resume Builder and
            eagerly anticipate helping you reach your career aspirations!
          </Typography>
          <Stack>
            <img className="about-img" src={aboutus} alt="img" />
          </Stack>
        </Stack>
        <Box mt="2px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}
          >
            Share with your friends
          </Typography>
          <Box className="icons">
            <LinkedInIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <FacebookOutlinedIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <WhatsAppIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="success"
            />
            <TwitterIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="info"
            />
            <EmailIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="dark"
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
