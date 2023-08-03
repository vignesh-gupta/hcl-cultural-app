import { NavLink, SurveyQuestion } from "@/types";

export const navLinks: NavLink[] = [
  {
    name: "Home",
    path: "/survey",
    type: "link",
  },
  {
    name: "Sample page",
    path: "/survey/sample",
    type: "link",
  },
];

export const personalQuestions: string[] = [
  "What is the name of your Organization?",
  "What Domain do you work in?",
  "What is your persona (Job Role)?",
  "How long have you been employed in your current role?",
  "State the level within your organization you work in?",
  "What department do you work in?",
  "Which geographical region are you from?",
  "Which Country are you based in?",
];

export const surveyQuestions: SurveyQuestion[] = [
  {
    question: "Strict Chain of Command",
    value: "surveyQ1",
    label : {
      min: "Strongly Disagree",
      mid: "Neutral",
      max: "Strongly Agree"
    }
  },
  {
    question: "Sticks to Hierarchy.",
    value: "surveyQ2",
    label : {
      min: "Strongly Disagree",
      mid: "Neutral",
      max: "Strongly Agree"
    }
  },
  {
    question: "Gender Equality ",
    value: "surveyQ3",
    label : {
      min: "Strongly Disagree",
      mid: "Neutral",
      max: "Strongly Agree"
    }
  },
  {
    question: "Support Innovation.",
    value: "surveyQ4",
    label : {
      min: "Strongly Disagree",
      mid: "Neutral",
      max: "Strongly Agree"
    }
  },
  {
    question: "Timeline of Strategic Planning is",
    value: "surveyQ5",
    label : {
      min: "Strongly Disagree",
      mid: "Neutral",
      max: "Strongly Agree"
    }
  },
  {
    question: "Rewards innovation",
    value: "surveyQ6",
    label : {
      min: "Strongly Disagree",
      mid: "Neutral",
      max: "Strongly Agree"
    }
  },
];

export const domains: string[] = [
  "Agriculture",
  "Mining",
  "Utilities",
  "Construction",
  "Manufacturing",
  "Wholesale Trade",
  "Retail Trade",
  "Transportation and Warehousing",
  "Information and Cultural Industries",
  "Finance and Insurance",
  "Real Estate and Rental Leasing",
  "Professional , Scientific and Technical Services",
  "Management of Companies and Enterprises",
  "Administrative and Support, Waste Management, and Remediation Services",
  "Educational Services",
  "Health Care and Social Assistance",
  "Arts, Entertainment and Recreation",
  "Accommodation and Food Services",
  "Other Services",
  "Public Administration",
];
