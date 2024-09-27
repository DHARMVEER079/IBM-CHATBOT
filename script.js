
  window.watsonAssistantChatOptions = {
    integrationID: "aab672bc-0797-407c-8ad1-88746171efa6", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "b3137ae0-4003-42d5-a756-c17954acb5d5", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });

