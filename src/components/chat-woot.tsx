// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";
import React from "react";

class ChatwootWidget extends React.Component {
  componentDidMount() {
    try {
      window.chatwootSettings = {
        position: "right",
        type: "standard",
        launcherTitle: "Chat with us",
      };

      (function (d, t) {
        const BASE_URL = "https://help.elixir.app";
        const g = d.createElement(t),
          s = d.getElementsByTagName(t)[0];
        g.src = BASE_URL + "/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g, s);

        g.onload = function () {
          window.chatwootSDK.run({
            websiteToken: "HrmwVNL2TwmgsAowwG7QuiCX",
            baseUrl: BASE_URL,
          });
        };
      })(document, "script");
    } catch (error) {
      if (error) {
        console.log("FAILED TO LOAD CHATWOOT");
      }
    }
  }

  render() {
    return null;
  }
}

export default ChatwootWidget;
