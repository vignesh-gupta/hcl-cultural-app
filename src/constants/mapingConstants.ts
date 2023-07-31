import { NavMenu, SurveyQuestion } from "@/types";

export const navLinks: NavMenu[] = [
  {
    name: "Home",
    path: "/survey",
    type: "link",
  },
  {
    name: "Cultural Data",
    path: "/survey/result",
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
    question:
      "Your organization follows a strict Chain of Command, hence DISCOURAGES independent decision making while trying new things in response to changing situations, and is resistant to feedbacks.",
    value: "surveyQ1",
  },
  {
    question:
      "Goals, Objectives, and Modus Operandi for the organization are CENTRALIZED, and Supervisors are not encouraged to provide feedback informally.",
    value: "surveyQ2",
  },
  {
    question: "Gender Equality ",
    value: "surveyQ3",
  },
  {
    question: "Support Innovation.",
    value: "surveyQ4",
  },
  {
    question:
      "Timeline of Strategic Planning is",
    value: "surveyQ5",
  },
  {
    question:
      "Your organization VALUES adherence job duties over importance of freedom, socialization, rewards & recognitions, and having an open-door policy to question managers / business leaders on modus-operandi.",
    value: "surveyQ6",
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
