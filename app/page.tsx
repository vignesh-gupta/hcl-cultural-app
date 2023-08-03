import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen gap-3 p-6 sm:p-12 md:p-24">
      <h1 className="text-lg font-bold text-center text-white md:text-2xl">
        Welcome to HCLTECH&apos;s Cultural Data Platform
      </h1>
      <p className="max-w-5xl text-sm text-center text-white md:text-lg">
        This is an organizational survey that is asking some questions regarding
        your organizational environment. It is asking you to consider your
        colleagues, team members, leaders and senior leadership around you when
        answering the questions. In this survey, we want you to answer as
        honestly as you can how you think and feel about organizational
        environment. It’s should be based on your observations on behaviors and
        work practices you come across every day or/and every week. It can be
        about virtual work practices or office behaviors and policies. However,
        in the beginning there are some general questions regarding you, your
        work location and role.
      </p>

      <Button className="mt-3 bg-background text-foreground">
        <Link href="/survey" className="flex items-center gap-2">Get Started <ChevronRight /> </Link>
      </Button>
    </main>
  );
}
