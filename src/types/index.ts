
export type NavLink = {
    name: string;
    path: string;
    type: 'link';
}

type NavCategory =  {
    name: string;
    type: 'category';
    subCategory: NavLink[];
}

export type SurveyQuestion = {
    question: string;
    value:  "org" | "domain" | "role" | "experience" | "surveyQ1" | "surveyQ2" | "surveyQ3" | "surveyQ4" | "surveyQ5" | "surveyQ6";
    label: {
        min: string;
        mid: string;
        max: string;
    }
}