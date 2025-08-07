/*import { Agent,  openai, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";
import { success } from "zod";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    
 // Create a new agent with a system prompt (you can add optional tools, too)
    const summarizer = createAgent({
      name: "summarizer",
      system: "You are an expert summarizer.  You sumarize in 2 words.",
      model: openai({ model: "openai/gpt-oss-20b:free"}),
    });
    //openai/gpt-oss-20b:free
    // Run the agent with an input.  This automatically uses steps
    // to call your AI mode  
    const { output }= await summarizer.run(
        `summerizer the following text:${event.data.value}`,
    );
    console.log(output);
     return { output };
  },
);

*/
import {  gemini,createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";
import { success } from "zod";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    
 // Create a new agent with a system prompt (you can add optional tools, too)
    const codeAgent = createAgent({
      name: "code-agent",
      system: "You aree an export nextjs developer .you write readable ,maintanable code .you write a simple next.js  & reactjssnippets,",
      model: gemini({ model: "gemini-2.5-flash"}),
    });
    //openai/gpt-oss-20b:free
    // Run the agent with an input.  This automatically uses steps
    // to call your AI mode  
    const { output }= await codeAgent.run(
        `write the following snipzet:${event.data.value}`,
    );
    console.log(output);
     return { output };
  },
);