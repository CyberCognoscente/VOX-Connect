import React from "react";
import { Bot } from "lucide-react";
import BotModeLayout from "./BotModeLayout";

export default function GeneralBotPage() {
  return (
    <BotModeLayout
      title="General Bot"
      description="General Q&A and everyday assistance"
      icon={Bot}
    />
  );
}
