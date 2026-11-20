export const siteConfig = {
  name: "Vineysh Rao Ananda Rao",
  title:
    "Data analyst and data engineer. MS Business Analytics & Information Management student at Purdue.",
  description:
    "Portfolio of Vineysh Rao Ananda Rao: data analytics and data engineering work in SQL, R, Power BI and Google Cloud.",
  accentColor: "#8E6F3E",
  social: {
    email: "vineyshrao@gmail.com",
    linkedin: "https://www.linkedin.com/in/vineysh-rao-ananda-rao-691ba5269",
    github: "https://github.com/vineyshrao",
  },
  aboutMe:
    "I'm a graduate student in Purdue's MS in Business Analytics and Information Management program at the Daniels School of Business, finishing in July 2027. Before Purdue, I worked at Sanghi Consulting from 2024 to 2026, first as a business analyst intern and then as a data analyst and lead data engineer, where I led a three-person data team supporting the evaluation of New York State's Medicaid 1115 Waiver program. Day to day, that meant building SQL and R pipelines, validating large healthcare datasets, designing data models, and building Power BI dashboards for the program's evaluators. I'm looking for data analyst and data engineering roles where I can connect the engineering side of data with the business questions it is meant to answer. I speak English, Malay and Tamil.",
  skills: [
    "SQL",
    "R",
    "Python",
    "Power BI",
    "Excel",
    "Google BigQuery",
    "Google Cloud Storage",
    "Google Apps Script",
    "Data modeling & ERDs",
    "Data validation & reconciliation",
    "Data governance",
  ],
  projects: [
    {
      name: "Collegiate Sport Analytics Project - Industry Practicum",
      description:
        "As one part of this larger industry practicum project, I built an automation that takes the HitTrax CSV files the client receives by email and loads them into Google Cloud Storage, using Gmail and Google Apps Script. I beta-tested it on a separate Gmail account, presented a proof of concept to the client, and then tested it successfully with them. It is set up to run once a week, on Mondays, as the client asked.",
      skills: ["Google Apps Script", "Gmail", "Google Cloud Storage"],
    },
  ],
  experience: [
    {
      company: "Sanghi Consulting, Inc. · Albany, NY",
      title: "Data Analyst / Lead Data Engineer",
      dateRange: "Jun 2025 - May 2026",
      bullets: [
        "Led a three-person data team supporting the evaluation of New York State's Medicaid 1115 Waiver program.",
        "Built automated SQL and R pipelines that process and validate large Medicaid healthcare datasets.",
        "Designed SQL solutions, reconciliation processes and ERDs that turned legacy data structures into analysis-ready datasets.",
        "Built Power BI dashboards that turn complex healthcare data into insights for the program's evaluators, and set up automated data governance processes that follow NYSDOH and CMS Data Use Agreements.",
      ],
    },
    {
      company: "Sanghi Consulting, Inc. · Albany, NY",
      title: "Business Analyst Intern",
      dateRange: "Aug 2024 - May 2025",
      bullets: [
        "Extracted, cleaned and validated data with SQL and Excel to keep healthcare analytics projects accurate and consistent.",
        "Helped develop data models, prepare analytical reports and document business requirements for project deliverables.",
      ],
    },
  ],
  education: [
    {
      school: "Purdue University, Daniels School of Business",
      degree: "M.S., Business Analytics and Information Management",
      dateRange: "Expected Jul 2027",
      achievements: ["Daniels School of Business Scholarship"],
    },
    {
      school: "University at Albany, SUNY",
      degree:
        "B.S., Business Administration: Information Systems & Business Analytics / Finance",
      dateRange: "May 2025",
      achievements: [
        "Summa Cum Laude, GPA 3.9/4.0",
        "Dean's List, Fall 2022 - Spring 2025",
        "Undergraduate Certificate in Business Analytics",
      ],
    },
  ],
};
