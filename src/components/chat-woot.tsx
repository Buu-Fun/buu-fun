// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";
import React from "react";

class ChatwootWidget extends React.Component {
  componentDidMount() {
    try {
      window.chatwootSettings = {
        position: "right",
        type: "expanded_bubble",
        launcherTitle: "Chat with us",
      };
      (function (d, t) {
        var BASE_URL = "https://help.buu.fun";
        var g = d.createElement(t),
          s = d.getElementsByTagName(t)[0];
        g.src = BASE_URL + "/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g, s);
        g.onload = function () {
          window.chatwootSDK.run({
            websiteToken: "adeDyCqezsCCfVazgFPsUFSW",
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
