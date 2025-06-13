import React from 'react';

export const CodeEditor: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 overflow-auto">
        <div className="flex">
          <div className="p-6 text-right pr-4 select-none text-gray-600 font-mono text-sm">
            {Array.from({ length: 24 }, (_, i) => (
              <div key={i + 1}>{i + 1}</div>
            ))}
          </div>
          <div className="p-6 pl-0 font-mono text-sm overflow-x-auto">
            <pre className="text-gray-300">
              <code>
                import os{"\n"}
                from typing import List, Dict, Optional{"\n"}
                from langchain import LLMChain{"\n\n"}
                class RonAI:{"\n"}
                {"    "}<span className="text-[#7E69AB]">&quot;&quot;&quot;{"\n"}
                {"    "}Ron AI - Advanced Healthcare Coordination System{"\n"}
                {"    "}A sophisticated state-of-the-art Care Coordination Assistant{"\n"}
                {"    "}powered by a network of specialized AI agents.{"\n"}
                {"    "}&quot;&quot;&quot;</span>{"\n\n"}
                {"    "}<span className="text-[#0FA0CE]">def</span> __init__(<span className="text-[#D6BCFA]">self</span>) -&gt; <span className="text-[#0FA0CE]">None</span>:{"\n"}
                {"        "}self.system_prompt = <span className="text-[#7E69AB]">&quot;You&apos;re Ron, of Ron AI and you&apos;re a sophisticated and state-of-the-art Care Coordination Assistant.&quot;</span>{"\n"}
                {"        "}self.agents: Dict[str, LLMChain] = {"{}"}{"\n"}
                {"        "}self.initialize_agents(){"\n\n"}
                {"    "}<span className="text-[#0FA0CE]">def</span> initialize_agents(<span className="text-[#D6BCFA]">self</span>) -&gt; <span className="text-[#0FA0CE]">None</span>:{"\n"}
                {"        "}<span className="text-[#6E59A5]"># Initialize specialized healthcare agents</span>{"\n"}
                {"        "}self.agents = {"{"}{"\n"}
                {"            "}<span className="text-[#7E69AB]">&quot;clinical_support&quot;</span>: self._create_agent(<span className="text-[#7E69AB]">&quot;clinical&quot;</span>),{"\n"}
                {"            "}<span className="text-[#7E69AB]">&quot;care_coordination&quot;</span>: self._create_agent(<span className="text-[#7E69AB]">&quot;coordination&quot;</span>),{"\n"}
                {"            "}<span className="text-[#7E69AB]">&quot;prior_auth&quot;</span>: self._create_agent(<span className="text-[#7E69AB]">&quot;authorization&quot;</span>){"\n"}
                {"        "}{"}"}{"\n\n"}
                {"    "}<span className="text-[#0FA0CE]">def</span> process_request(<span className="text-[#D6BCFA]">self</span>, request: str) -&gt; Dict:{"\n"}
                {"        "}<span className="text-[#6E59A5]"># Process incoming healthcare requests</span>{"\n"}
                {"        "}agent = self._select_agent(request){"\n"}
                {"        "}<span className="text-[#0FA0CE]">return</span> agent.run(request)
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
