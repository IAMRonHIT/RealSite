import React from "react";
import { Hero3D } from "@/components/Hero3D";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CodeWindow } from "@/components/CodeEditor/CodeWindow";
import { TerminalWindow } from "@/components/Terminal/TerminalWindow";
import { PriorAuthDashboard } from "@/components/PriorAuth/PriorAuthDashboard";

const Index: React.FC = () => {
  return <div className="min-h-screen bg-[#141821] font-[Raleway]">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-32">
          <div className="flex-1 space-y-6 animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 bg-[#243145] rounded-full text-sm font-medium text-white/90 animate-fade-in">
              Empowering Healthcare Heroes
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-wider text-white">
              Prior Authorizations made{" "}
              <span className="font-[Audiowide] text-[#0FA0CE]">
                Simple
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              We&apos;re revolutionizing healthcare by putting caregivers first. Our AI solutions reduce burnout and enhance the human side of medicine.
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-[#1A1F2C] bg-white hover:bg-white/90">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-xl animate-fade-in">
            <Hero3D />
          </div>
        </div>

        <div className="py-20 relative">
          <div className="absolute inset-0 bg-[#0FA0CE] opacity-10 blur-[100px] rounded-full" />
          
          <div className="relative z-10 max-w-4xl mx-auto mb-16 animate-fade-up">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <img src="/photo-1485827404703-89b55fcc595e" alt="Ron AI Logo" className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover flex-shrink-0" />
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">Streamline Prior Authorizations Intelligently</h2>
                <p className="text-lg md:text-xl text-gray-300">Transform complex authorization workflows into simple, automated processes with our AI-powered platform. Ron AI predicts when authorizations are needed, manages submissions, and handles appeals - saving your team time and reducing denials.</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0FA0CE] via-[#33C3F0] to-[#9b87f5] opacity-50 blur-lg group-hover:opacity-75 transition duration-500"></div>
              
              <PriorAuthDashboard />
            </div>

            <div className="text-center animate-fade-up mt-8">
              <Button size="lg" className="bg-white/5 text-white hover:bg-white/10 border border-white/10">
                View All Authorization Requests <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="py-20 relative min-h-screen">
          <div className="relative z-10 max-w-7xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Powered by Advanced Technology
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Meet Ron, our sophisticated AI agent orchestrating seamless healthcare coordination
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <CodeWindow />
            <TerminalWindow />
          </div>
        </div>
      </div>
    </div>;
};
export default Index;
