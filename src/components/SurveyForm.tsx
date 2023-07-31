import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/constants/schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { domains, surveyQuestions } from "@/constants/mapingConstants";
import RatingOptions from "./RatingOptions";
import { SurveyQuestion } from "@/types";
import { submitSurveyAction } from "@/actions";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Slider } from "./ui/slider";

const SurveyForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      org: "HCLTECH",
      domain: "Health Care and Social Assistance",
      role: "SDE",
      experience: "1-2 years",
      surveyQ1: "3",
      surveyQ2: "3",
      surveyQ3: "3",
      surveyQ4: "4",
      surveyQ5: [5],
      surveyQ6: "4",
      // orgLvl: "",
      // department: "",
      // region: "",
      // country: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values.surveyQ4);
    let res = await submitSurveyAction(values);
    console.log(res);

    if (res.id) {
      alert("Survey Submitted Successfully");
    }

    form.reset();
  }

  return (
    <div className="mx-16">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="org"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-base">
                  What is the name of your Organization?
                </FormLabel>
                <FormControl>
                  <Input placeholder="HCLTECH" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="domain"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-base">
                  What Domain do you work in?
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Domain" />
                    </SelectTrigger>
                    <SelectContent>
                      {domains.map((domain) => (
                        <SelectItem key={domain} value={domain}>
                          {domain}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-base">
                  What is your persona (Job Role)?
                </FormLabel>
                <FormControl>
                  <Input placeholder="HCLTECH" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-base">
                  How long have you been employed in your current role?
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Experience" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "Less than a year",
                        "1-2 years",
                        "3-5 years",
                        "6-10 years",
                        "11+ years",
                      ].map((experience) => (
                        <SelectItem key={experience} value={experience}>
                          {experience}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* {[...surveyQuestions].splice(1).map((question: SurveyQuestion, i: number) => ( */}
          {/* ))} */}

          {/* Testing other ways */}

          <FormField
            control={form.control}
            name={surveyQuestions[3].value}
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-xs md:text-base">
                  {surveyQuestions[3].question}
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={String(field.value)}
                    className="flex flex-col justify-between space-y-1"
                  >
                    <div className="flex justify-between grow">
                      <FormItem className="flex items-center space-x-3 space-y-0 grow text-muted-foreground">
                        <FormLabel className="text-xs font-normal md:text-sm">
                          Not at all
                        </FormLabel>
                      </FormItem>
                      <FormItem className="items-center justify-center hidden space-x-3 space-y-0 sm:flex grow text-muted-foreground">
                        <FormLabel className="text-xs md:text-sm">
                          Somewhat
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center justify-end space-x-3 space-y-0 grow text-muted-foreground">
                        <FormLabel className="text-xs md:text-sm">
                          Supportive
                        </FormLabel>
                      </FormItem>
                    </div>
                    <div className="flex justify-between px-2">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <FormItem
                          className="flex items-center justify-center space-x-3 space-y-0 grow"
                          key={`${surveyQuestions[1].value}-${value}`}
                        >
                          <FormControl>
                            <RadioGroupItem value={value.toString()} />
                          </FormControl>
                        </FormItem>
                      ))}
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={surveyQuestions[4].value}
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-xs md:text-base">
                  {surveyQuestions[4].question}
                </FormLabel>
                <div className="flex gap-2">
                  <FormItem className="flex items-center justify-center space-x-3 space-y-0 grow text-muted-foreground">
                    <FormLabel className="text-xs font-normal md:text-sm">
                      SHORT Term
                    </FormLabel>
                  </FormItem>
                  <Slider
                    defaultValue={[Number(field.value[0])]}
                    onValueChange={field.onChange}
                    min={1}
                    max={5}
                    step={1}
                  />
                  <FormItem className="flex items-center justify-center space-x-3 space-y-0 grow text-muted-foreground">
                    <FormLabel className="text-xs font-normal md:text-sm">
                      LONG Term
                    </FormLabel>
                  </FormItem>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* End of testing */}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default SurveyForm;
