import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Does the client need a consent form?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely. To make sure the client has uploaded a copy of the
            consent form, please use the documentation provided. The client must
            provide full details, such as the name of the company and the
            position. The client must also provide a digital signature. No
            initials are accepted.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What services does the recruitment agency provide?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our recruitment agency provides full-cycle recruitment services,
            including job advertising, candidate sourcing, screening and
            interviewing, reference checking, and offer management.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can you help me find a job in a specific industry?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, however, we are experts in Software, Finance and Investments
            industries. Ranging from developers to Project Managers and
            everything in-between. We can help you find job opportunities in
            your desired field.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do you match job seekers with potential employers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We use a combination of industry knowledge, market research, and our
            extensive network to match job seekers with potential employers. We
            also take into account a candidate's skills, experience, and goals
            when making recommendations
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is your success rate in placing job seekers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our success rate in placing job seekers varies depending on the job
            market and the specific job requirements, but we are committed to
            finding the best possible match for every candidate.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do you ensure that the job opportunities you provide are
            legitimate and safe?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We thoroughly vet all job opportunities and clients before
            presenting them to job seekers. We also encourage job seekers to do
            their own research and due diligence on any potential employer.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
