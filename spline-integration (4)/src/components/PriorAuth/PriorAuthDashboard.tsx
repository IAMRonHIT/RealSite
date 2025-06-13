import React from "react";
import { FileCheck, FileText, Hospital, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

// Types for the procedures
type Procedure = {
  id: string;
  name: string;
  code: string;
  confidence: string;
  type: string;
};

export const PriorAuthDashboard: React.FC = () => {
  const { toast } = useToast();
  
  // ACL tear treatment procedures
  const procedures: Procedure[] = [
    { id: "1", name: "ACL Reconstruction Surgery", code: "29888", confidence: "98%", type: "Outpatient" },
    { id: "2", name: "Physical Therapy (12 visits)", code: "97110", confidence: "95%", type: "Outpatient" },
    { id: "3", name: "Home Health Visits (6)", code: "99500", confidence: "92%", type: "Home Care" }
  ];

  const handleSubmitProcedure = (procedure: Procedure) => {
    toast({
      title: "Procedure Submitted",
      description: `${procedure.name} (CPT: ${procedure.code}) authorization request sent.`,
    });
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[#0FA0CE] opacity-10 blur-[100px] rounded-full" />
      
      <div className="relative z-10">
        <div className="relative bg-[#111318] backdrop-blur-xl border-[3px] border-[#0FA0CE]/80 rounded-2xl overflow-hidden p-6">
          <div className="flex items-center w-full mb-4">
            <div className="relative">
              <div className="absolute -inset-1 bg-[#0FA0CE] opacity-40 blur-md rounded-full"></div>
              <div className="relative w-10 h-10 rounded-full bg-[#1A1F2C] flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-[#0FA0CE]" />
              </div>
            </div>
            <h3 className="ml-4 text-xl text-white font-semibold">Prior Auth Assistant</h3>
          </div>
          
          <div className="bg-[#1A1F2C]/50 rounded-lg p-4 mb-4">
            <div className="bg-[#243145] rounded-lg p-3 mb-4 border-l-4 border-[#0FA0CE]">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-5 h-5 text-[#0FA0CE]" />
                <h4 className="text-white text-base font-semibold">Patient: Complete ACL Tear</h4>
              </div>
            </div>
            
            <div className="space-y-3 max-h-[220px] overflow-y-auto py-1 px-1">
              {procedures.map(procedure => (
                <div key={procedure.id} className="flex items-center justify-between bg-[#243145] rounded-lg p-3 hover:bg-[#243145]/80 transition-colors">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 border border-[#0FA0CE]/30">
                      <AvatarFallback className="bg-[#0FA0CE]/20 text-[#0FA0CE] text-xs">
                        {procedure.id === "1" ? <Hospital className="h-4 w-4" /> : 
                         procedure.id === "2" ? <Activity className="h-4 w-4" /> : 
                         <FileText className="h-4 w-4" />}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white text-sm font-medium">{procedure.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-white/60 text-xs">CPT: {procedure.code}</p>
                        <span className="text-xs bg-[#0FA0CE]/20 text-[#0FA0CE] px-2 py-0.5 rounded">
                          {procedure.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs bg-[#0FA0CE]/20 text-[#0FA0CE] px-2 py-1 rounded">
                      {procedure.confidence}
                    </span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-[#0FA0CE]/30 bg-transparent hover:bg-[#0FA0CE]/10 text-white h-8 px-3 text-xs"
                      onClick={() => handleSubmitProcedure(procedure)}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
