"use client";

import { forwardRef, useRef } from "react";
import { cn } from "../ui/cn";
import { AnimatedBeam } from "../ui/animated-beam";
import { FeatureExplainer } from "./FeatureExplainer";
import { RetraceIcon } from "../icons/platforms";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string; sublabel?: string }
>(({ className, children, label, sublabel }, ref) => (
  <div className="flex flex-col items-center gap-1.5">
    <div ref={ref} className={cn("z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]", className)}>
      {children}
    </div>
    {label && <span className="text-[10px] font-semibold text-gray-600 text-center max-w-[80px] leading-tight">{label}</span>}
    {sublabel && <span className="text-[9px] text-gray-400 text-center max-w-[90px] leading-tight">{sublabel}</span>}
  </div>
));
Circle.displayName = "Circle";

const Step = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string; sublabel?: string }
>(({ className, children, label, sublabel }, ref) => (
  <div className="flex flex-col items-center gap-1.5">
    <div ref={ref} className={cn("z-10 flex h-14 items-center justify-center rounded-xl border-2 bg-white px-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]", className)}>
      {children}
    </div>
    {label && <span className="text-[10px] font-semibold text-gray-600 text-center leading-tight">{label}</span>}
    {sublabel && <span className="text-[9px] text-gray-400 text-center max-w-[90px] leading-tight">{sublabel}</span>}
  </div>
));
Step.displayName = "Step";

function TagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#3a8f85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a2.25 2.25 0 003.182 0l4.328-4.328a2.25 2.25 0 000-3.182L11.159 3.66A2.25 2.25 0 009.568 3z" />
      <path d="M6 6h.008v.008H6V6z" />
    </svg>
  );
}

function RuleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#c8723a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#c8723a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#3a8f85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 2H4a2 2 0 00-2 2v12a2 2 0 002 2h14l4 4V4a2 2 0 00-2-2z" />
      <path d="M8 10h.01M12 10h.01M16 10h.01" />
    </svg>
  );
}

function MCPIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3M3.75 3.75h16.5v16.5H3.75z" />
    </svg>
  );
}

function ScopeFlow() {
  const containerRef = useRef<HTMLDivElement>(null);

  const retraceRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const mcpRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative flex w-full max-w-2xl items-center justify-center overflow-hidden rounded-lg p-8 mx-auto">
      <div className="grid grid-cols-[auto_auto_auto_1fr] items-center gap-x-10 w-full">
        <div className="flex flex-col items-center">
          <Circle ref={retraceRef} className="border-[#c8723a]" label="Your data" sublabel="All conversations">
            <RetraceIcon className="size-6" />
          </Circle>
        </div>

        <div className="flex flex-col items-center">
          <Step ref={tagRef} className="border-[#3a8f85]" label="Label" sublabel="Tag conversations">
            <TagIcon />
          </Step>
        </div>

        <div className="flex flex-col items-center">
          <Step ref={ruleRef} className="border-[#c8723a]" label="Rules" sublabel="Allow / Block">
            <RuleIcon />
          </Step>
        </div>

        <div className="flex flex-col items-center gap-5">
          <Circle ref={chatRef} className="border-[#3a8f85]" label="Embedded chat" sublabel="Sees allowed only">
            <ChatIcon />
          </Circle>
          <Circle ref={mcpRef} className="border-[#7C3AED]" label="MCP server" sublabel="Sees allowed only">
            <MCPIcon />
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={retraceRef} toRef={tagRef} gradientStartColor="#c8723a" gradientStopColor="#3a8f85" duration={3.5} />
      <AnimatedBeam containerRef={containerRef} fromRef={tagRef} toRef={ruleRef} gradientStartColor="#3a8f85" gradientStopColor="#c8723a" duration={3.5} delay={0.4} />
      <AnimatedBeam containerRef={containerRef} fromRef={ruleRef} toRef={chatRef} curvature={-20} gradientStartColor="#c8723a" gradientStopColor="#3a8f85" duration={3.5} delay={0.8} />
      <AnimatedBeam containerRef={containerRef} fromRef={ruleRef} toRef={mcpRef} curvature={20} gradientStartColor="#c8723a" gradientStopColor="#7C3AED" duration={3.5} delay={1.1} />
    </div>
  );
}

export function ScopeExplainer() {
  return (
    <FeatureExplainer
      notes={[
        { title: "Label", text: "Conversations are tagged with labels: platform labels (automatic), topic labels (AI-extracted), and custom labels (yours). Labels are the building blocks of access control." },
        { title: "Rules", text: "You set allow/block rules per consumer. For example: block 'private' and 'family' labels from the embedded chat, or allow only 'chatgpt' and 'claude' labels for the MCP server." },
        { title: "Enforcement", text: "Rules are enforced at the query level using CASL. When Claude asks for context, the scope engine filters out any conversation that doesn't match the rules. No exceptions." },
        { title: "Granular", text: "Different consumers can have different rules. The embedded chat might see your work conversations while the MCP server only sees your AI conversations." },
      ]}
    >
      <ScopeFlow />
    </FeatureExplainer>
  );
}
