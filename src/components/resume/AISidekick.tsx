import React, { useEffect } from "react";
import { AMINO_BASE_LINK } from "../../constants/AminoBotLinks";

export const AISidekick: React.FC<{ botId: string }> = ({ botId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = AMINO_BASE_LINK;
    script.setAttribute("data-bot-id", botId);
    script.async = true;
    document.body.appendChild(script);

    const chatFormDiv = document.getElementById("chat_form");
    if (chatFormDiv) {
      chatFormDiv.appendChild(script);
    }
  }, [botId]);

  return null;
};