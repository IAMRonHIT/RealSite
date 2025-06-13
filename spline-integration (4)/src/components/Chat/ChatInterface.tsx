import React, { useState, useRef, useEffect } from "react";
import { Send, User, Bot, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

type Message = {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
};

interface ChatInterfaceProps {
  initialMessages?: Message[];
  onSendMessage?: (message: string) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  initialMessages = [],
  onSendMessage,
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Create and add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    
    // Call the callback if provided
    if (onSendMessage) {
      onSendMessage(inputValue);
    }
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(inputValue),
        sender: "assistant",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, responseMessage]);
      setIsLoading(false);
    }, 1000);
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Simulate AI responses based on keywords
  const getAIResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes("acl") || input.includes("knee")) {
      return "Based on the ACL tear diagnosis, I recommend submitting prior authorization for reconstruction surgery (CPT: 29888), physical therapy (CPT: 97110), and home health visits (CPT: 99500). Would you like me to prepare these requests?";
    } else if (input.includes("surgery") || input.includes("operation")) {
      return "For ACL reconstruction surgery, we'll need to submit clinical documentation including the MRI results, conservative treatment attempts, and functional impairment assessment. The approval rate for ACL surgery with complete tear diagnosis is approximately 92%.";
    } else if (input.includes("physical therapy") || input.includes("pt")) {
      return "I recommend requesting authorization for 12 PT visits initially. Most insurers approve 6-12 visits for post-ACL surgery rehabilitation. We can request additional visits later if needed based on progress reports.";
    } else if (input.includes("home") || input.includes("home health")) {
      return "Home health visits are typically approved for the first 2-3 weeks post-surgery. I'll prepare documentation highlighting mobility limitations and the need for in-home wound care and initial rehabilitation guidance.";
    } else if (input.includes("deny") || input.includes("appeal") || input.includes("rejected")) {
      return "If the authorization is denied, we can appeal with additional documentation. Key factors for successful appeals include: detailed functional limitations, failed conservative treatment documentation, and specialist recommendations. Would you like me to help prepare an appeal?";
    } else if (input.includes("document") || input.includes("upload")) {
      return "Please upload the relevant clinical documentation including MRI reports, orthopedic evaluation notes, and any conservative treatment records. These will significantly improve our approval chances.";
    } else if (input.includes("timeline") || input.includes("time") || input.includes("urgent")) {
      return "For urgent requests, most payers must respond within 72 hours per CMS regulations. Standard requests typically take 7-14 days. Would you like me to mark this as an urgent request?";
    } else if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return "Hello! I'm Ron, your prior authorization assistant. How can I help you today with authorization requests for your patient?";
    } else if (input.includes("thank")) {
      return "You're welcome! I'm here to help streamline your prior authorization process. Is there anything else you need assistance with?";
    } else {
      return "I understand you're asking about prior authorization. Could you provide more details about the specific procedure or treatment you need help with?";
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex gap-3 max-w-[80%] ${
                message.sender === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <Avatar className={`h-8 w-8 ${message.sender === "assistant" ? "border-2 border-[#0FA0CE]/30" : ""}`}>
                <AvatarFallback className={message.sender === "assistant" ? "bg-[#0FA0CE]/20 text-[#0FA0CE]" : "bg-[#243145] text-white"}>
                  {message.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </AvatarFallback>
              </Avatar>
              <div
                className={`rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-[#0FA0CE] text-white"
                    : "bg-[#243145] text-white/90"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-3">
              <Avatar className="h-8 w-8 border-2 border-[#0FA0CE]/30">
                <AvatarFallback className="bg-[#0FA0CE]/20 text-[#0FA0CE]">
                  <Bot className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="bg-[#243145] text-white/90 rounded-lg p-3">
                <Loader2 className="h-5 w-5 animate-spin" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-[#30363D]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about prior authorizations..."
            className="bg-[#1A1F2C] border-[#30363D] text-white placeholder:text-white/50"
          />
          <Button 
            type="submit" 
            size="icon"
            disabled={isLoading || !inputValue.trim()}
            className="bg-[#0FA0CE] hover:bg-[#0FA0CE]/90 text-white"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};
