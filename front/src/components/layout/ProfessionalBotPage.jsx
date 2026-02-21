import React from "react";
import BotModeLayout from "./BotModeLayout";
import { botConfigs } from "../../data/botConfigs";

export default function ProfessionalBotPage() {
  const bot = botConfigs.professional;

  return (
    <BotModeLayout
      title={bot.title}
      description={bot.description}
      assistantId={bot.config.id}
      assistantName={bot.config.name}
      firstMessage={bot.config.firstMessage}
    />
  );
}
