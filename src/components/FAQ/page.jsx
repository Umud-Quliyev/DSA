import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Element } from "react-scroll";

const FAQ = () => {
  return (
    <Element name="faq" className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-4">FAQ</h1>
      <Accordion className="mb-4">
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            component="span"
            style={{ color: "#28AAA8",fontWeight: "bold",padding: "10px", }}
            className="text-lg font-semibold"
          >
            12 həftəlik Data Science Bootcampda nə təklif edirsiniz?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-700">
            12 həftəlik proqramımız sizin peşəkar karyera addımlarınızı
            atmağınız üçün lazım olacaq bütün data science biliklərini əhatə
            edəcək və bu sahədə uğurlu karyeraya başlamağınızı təmin edəcəkdir.
            Data Science Bootcamp vasitəsi ilə siz ilkin səviyyədən peşəkar Data
            Scientist pilləsinə qədər yüksələ bilərsiniz. Bu proqramda
            Vizuallaşdırma, Data analitikası, Machine Learning, Deep Learning,
            Artificial İntellegence metodologiyalarının müxtəlif real biznes
            situasiyalarına tətbiqini R, Python, Hadoop, Spark, SPSS, SPSS
            Modeller və Tableau kimi ən müasir proqram paketləri vasitəsi ilə
            öyrənəcəksiniz.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="mb-4">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            style={{ color: "#28AAA8",fontWeight: "bold",padding: "10px", }}
            className="text-lg font-semibold"
          >
            Müraciət prosesi necədir?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-700">
            Qeydiyyat üçün ilkin olaraq online{" "}
            <a href="https://dsa.az/muraciet">
              müraciət formunu doldurmalısınız. Bundan sonra, əməkdaşımız
              sizinlə əlaqə saxlayacaqdır. Müraciət və Tədris proqramı ilə bağlı
              hər hansı sualınız yaranarsa 051 341 43 40 nömrəsi və ya{" "}
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-4">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            style={{ color: "#28AAA8",fontWeight: "bold",padding: "10px", }}
            className="text-lg font-semibold"
          >
            Kimlər iştirak edə bilər?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-700">
            Data ilə işləyən dövlət və özəl sahədə çalışanlar, elmi
            tədqiqatçılar, proqramistlər, data mühəndisləri, layihə menecerləri,
            rəhbər şəxslər, biznes idarəçiləri, marketoloqlar, maliyyəçilər,
            mühasiblər, tələbələr və data science sahəsinə marağı olan hər kəs
            iştirak edə bilər.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-4">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            style={{ color: "#28AAA8",fontWeight: "bold",padding: "10px", }}
            className="text-lg font-semibold"
          >
            Data Science Academy iştirakçılara hansı karyera xidmətləri təklif
            edir ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-700">
            Bootcamp sonunda Data analitiklər və HR mütəxəssisləri ilə görüşüb
            birə-bir məsləhətlər alacaqsınız. Konsultasiya zamanı müsahibədə
            necə davranmalı olduğunuz və əməkhaqqı sövdələşməsi kimi mövzulara
            toxunulacaq. Daha sonra CV-niz, Linkedin profiliniz və Data Science
            GitHub portfolionuz hazırlanacaq və CV-Vakansiya* bazasına daxil
            olunacaq. Son olaraq ekskluziv olaraq əməkdaşlıq etdiyimiz
            şirkətlərdə işləmək imkanı əldə edəcəksiniz.
          </Typography>
          <br />
          <Typography className="text-gray-700">
            *Akademiyamız bir çox nüfuzlu yerli və qlobal şirkətlərə əməkdaşlıq
            əsasında data və analitika mütəxəssisləri təmin edir.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-4">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            style={{ color: "#28AAA8",fontWeight: "bold",padding: "10px", }}
            className="text-lg font-semibold"
          >
            İştirakçılar proqramı bitirdikdən sonra sertifikatla təmin
            olunacaqmı?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-700">
            Bootcamp sonunda imtahan nəticələrinə əsasasən Data Analyst, Junior
            Data Scientist, Data Scientist, Associate Data Scientist
            sertifikatları təqdim olunur. İmtahan nəticələri minimum olan
            iştirakçılar üçün “İştirak” sertifikatı təqdim olunur.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-4">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            style={{ color: "#28AAA8",fontWeight: "bold",padding: "10px", }}
            className="text-lg font-semibold"
          >
            Bootcamp kimlər tərəfindən tədris olunur?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-700">
            Bootcamp Elektron Hökumətin İnkişafı Mərkəzi, Bakcell, Beynəlxalq
            Bank və Paşa Bank kimi qabaqcıl müəssisələrdə Data Scientist və Data
            Analitik kimi çalışan təlimçilərimiz tərəfindən tədris olunacaqdır.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-4">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            style={{ color: "#28AAA8",fontWeight: "bold",padding: "10px", }}
            className="text-lg font-semibold"
          >
            Bootcampa başlamaq üçün hansı biliklər tələb olunur
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-700">
            Bootcampda iştirak etmək üçün data analitikası və statistika elminə
            marağınızın olması, orta səviyyə ingilis dili və təhlil
            bacarıqlarınızın olması vacibdir. İlkin proqramlaşdırma və təməl
            statistika biliklərinizin olması üstünlükdür. Proqrama uyğunluğunuzu
            test etmək üçün bizə müraciət edə bilərsiniz. Testin nəticəsi
            əsasında İlkin hazırlıq proqramına yönləndirilə bilərsiniz.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-4">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            style={{ color: "#28AAA8",fontWeight: "bold",padding: "10px", }}
            className="text-lg font-semibold"
          >
            Təlimlər nə zaman başlayır?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-gray-700">
            Təlimlərin başlama tarixləri haqqında məlumatları səhifənin ön
            hissəsində və sosial şəbəkələrdə verilən elanlar vasitəsilə öyrənə
            bilərsiniz. Başlama vaxtını dəqiqləşdirmək üçün 051 341 43 40
            nömrəsi və ya "info@dsa.az" maili ilə əlaqə saxlaya bilərsiniz.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Element>
  );
};

export default FAQ;
