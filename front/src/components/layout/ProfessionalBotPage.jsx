import React from "react";
import { Briefcase } from "lucide-react";
import BotModeLayout from "./BotModeLayout";

export default function ProfessionalBotPage() {
  return (
    <BotModeLayout
      title="Professional Bot"
      description="Work-focused help and productivity support"
      icon={Briefcase}
    />
  );
}
