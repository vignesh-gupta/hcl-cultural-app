import React from "react";
import { SelectContent, SelectItem } from "./ui/select";

const RatingOptions = () => {
  const options: string[] = [
    "1 - Strongly Disagree",
    "2 - Somewhat Disagree",
    "3 - Not Sure",
    "4 - Somewhat Agree",
    "5 - Strongly Agree",
  ];

  return (
    <SelectContent>
      {options.map((option) => (
        <SelectItem key={option} value={option.charAt(0)}>
          {option}
        </SelectItem>
      ))}
    </SelectContent>
  );
};

export default RatingOptions;
