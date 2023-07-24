"use server"

import { formSchema } from "@/constants/schema"
import prisma  from "@/lib/prisma";
import * as z from "zod";

export async function submitSurveyAction(values: z.infer<typeof formSchema>){

  return await prisma.survey.create({
    data: {
      organization: values.org,
      persona: values.role,
      surveyQ1: parseInt(values.surveyQ1),
      surveyQ2: parseInt(values.surveyQ2),
      surveyQ3: parseInt(values.surveyQ3),
      surveyQ4: parseInt(values.surveyQ4),
      surveyQ5: parseInt(values.surveyQ5),
      surveyQ6: parseInt(values.surveyQ6),
      domain: values.domain,
      experience: values.experience,
    },
  }); 
}

export async function getSurveyAction(){
  return await prisma.survey.findMany({
    select:{
      domain: true
    }
  });
}