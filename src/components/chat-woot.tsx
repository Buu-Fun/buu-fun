// @ts-ignore
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
        var BASE_URL = "https://help.elixir.app";
        var g = d.createElement(t),
          s = d.getElementsByTagName(t)[0];
        // @ts-ignore
        g.src = BASE_URL + "/packs/js/sdk.js";
        // @ts-ignore
        g.defer = true;
        // @ts-ignore
        g.async = true;
        // @ts-ignore
        s.parentNode.insertBefore(g, s);
        g.onload = function () {
          window.chatwootSDK.run({
            websiteToken: "HrmwVNL2TwmgsAowwG7QuiCX",
            baseUrl: BASE_URL,
          });
        };
      })(document, "script");
    } catch (error) {}
  }

  render() {
    return null;
  }
}

export default ChatwootWidget;
