import { NextRequest, NextResponse } from 'next/server'
 
export async function POST(request : NextRequest) {
    const values = await request;

    console.log(request.json());
    
    
  // await prisma.survey.create({
  //   data: {
  //     ...values,
  //     organization: values.org,
  //     persona: values.role,
  //     surveyQ1: parseInt(values.surveyQ1),
  //     surveyQ2: parseInt(values.surveyQ2),
  //     surveyQ3: parseInt(values.surveyQ3),
  //     surveyQ4: parseInt(values.surveyQ4),
  //     surveyQ5: parseInt(values.surveyQ5),
  //     surveyQ6: parseInt(values.surveyQ6),
  //   },
  // });
  return  NextResponse.json({ message: request });
}