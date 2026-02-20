import React from "react";
import { Heart } from "lucide-react";
import BotModeLayout from "./BotModeLayout";

export default function FriendBotPage() {
  return (
    <BotModeLayout
      title="Friend Bot"
      description="Companion-style friendly conversation"
      icon={Heart}
    />
  );
}
