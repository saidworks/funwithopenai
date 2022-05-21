const data = {
    prompt: "Write a poem about a dog wearing skis",
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
   };
    
   fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_SECRET}`,
    },
    body: JSON.stringify(data),
   });


   /*
   https://beta.openai.com/docs/api-reference/fine-tunes/create
   https://simonplend.com/how-to-use-fetch-to-post-form-data-as-json-to-your-api/
   https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html
   https://www.twilio.com/blog/getting-started-with-openai-s-gpt-3-in-node-js
https://medium.com/@soni.dumitru/keeping-your-api-keys-secret-with-dotenv-b66aa05fdf71
https://pineco.de/the-simplest-sass-compile-setup/


   */