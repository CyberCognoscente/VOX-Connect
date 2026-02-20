import React from "react";
import { GraduationCap } from "lucide-react";
import BotModeLayout from "./BotModeLayout";

export default function EducatorBotPage() {
  return (
    <BotModeLayout
      title="Educator Bot"
      description="Learning support and concept explanations"
      icon={GraduationCap}
    />
  );
}
