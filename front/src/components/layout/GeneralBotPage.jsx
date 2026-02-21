import React from "react";
import BotModeLayout from "./BotModeLayout";
import { botConfigs } from "../../data/botConfigs";

export default function GeneralBotPage() {
  const bot = botConfigs.general;

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
