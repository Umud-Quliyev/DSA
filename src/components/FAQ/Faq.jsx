import  { useEffect, useState } from "react";
import "./Faq.css";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": { borderBottom: 0 },
  "&::before": { display: "none" },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Faq = () => {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [faqItems, setFaqItems] = useState([]);

  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const faqRes = await fetch(`${BASE_URL}/faq/`);
        const faqData = await faqRes.json();

        faqData.forEach((item) => {
          const itemId = String(item.id || "default");

          i18n.addResource(
            i18n.language,
            "translation",
            `faq.${itemId}.question`,
            item.question
          );
          i18n.addResource(
            i18n.language,
            "translation",
            `faq.${itemId}.answer`,
            item.answer
          );
        });

        setFaqItems(faqData);
      } catch (error) {
        console.error("Xeta:", error);
      }
    };

    fetchData();
  }, [BASE_URL, i18n]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section id="faq" name="faq" className="faq">
      <div className="contanierr">
        <div className="faq__title">
          <motion.h2 initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}>{t("faq.title")}</motion.h2>
        </div>
        <motion.div className="faq__list" initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: .5,
              ease: "easeIn",
            }}
            viewport={{ once: true }}>
          {faqItems.length > 0 ? (
            faqItems.map((item, index) => (
              <Accordion
                key={index}
                className="faq__item"
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary
                  aria-controls={`panel${index}d-content`}
                  id={`panel${index}d-header`}
                >
                  <Typography component="span">
                    {i18n.language === "az" ? item.question : item.question_en}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {i18n.language === "az" ? item.answer : item.answer_en}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))
          ) : (
            <p>{t("faq.loading")}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
