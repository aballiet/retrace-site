"use client";

import { forwardRef, useRef } from "react";
import { cn } from "../ui/cn";
import { AnimatedBeam } from "../ui/animated-beam";
import { FeatureExplainer } from "./FeatureExplainer";
import { WhatsAppIcon, ChatGPTIcon, ClaudeIcon, platformColors } from "../icons/platforms";

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

function TimelineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#3a8f85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function TopicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#c8723a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a2.25 2.25 0 003.182 0l4.328-4.328a2.25 2.25 0 000-3.182L11.159 3.66A2.25 2.25 0 009.568 3z" />
      <path d="M6 6h.008v.008H6V6z" />
    </svg>
  );
}

// Waves icon matching Retrace sidebar
function WavesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#3a8f85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  );
}

function RiversFlow() {
  const containerRef = useRef<HTMLDivElement>(null);

  const waRef = useRef<HTMLDivElement>(null);
  const gptRef = useRef<HTMLDivElement>(null);
  const claudeRef = useRef<HTMLDivElement>(null);

  const timelineRef = useRef<HTMLDivElement>(null);
  const topicRef = useRef<HTMLDivElement>(null);

  const riversRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative flex w-full max-w-2xl items-center justify-center overflow-hidden rounded-lg p-8 mx-auto">
      <div className="grid grid-cols-[1fr_1fr_auto] items-center gap-x-10 w-full">
        <div className="flex flex-col items-center gap-5">
          <Circle ref={waRef} className="border-[#25D366]" label="WhatsApp">
            <WhatsAppIcon />
          </Circle>
          <Circle ref={gptRef} className="border-[#10A37F]" label="ChatGPT">
            <ChatGPTIcon />
          </Circle>
          <Circle ref={claudeRef} className="border-[#D97706]" label="Claude">
            <ClaudeIcon />
          </Circle>
        </div>

        <div className="flex flex-col items-center gap-5">
          <Step ref={timelineRef} className="border-[#3a8f85]" label="Timeline" sublabel="Group by time">
            <TimelineIcon />
          </Step>
          <Step ref={topicRef} className="border-[#c8723a]" label="Categorize" sublabel="By person or topic">
            <TopicIcon />
          </Step>
        </div>

        <div className="flex flex-col items-center">
          <Circle ref={riversRef} className="border-[#3a8f85]" label="Life Rivers" sublabel="Streamgraph">
            <WavesIcon />
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={waRef} toRef={timelineRef} curvature={-30} gradientStartColor="#25D366" gradientStopColor="#3a8f85" duration={3.5} />
      <AnimatedBeam containerRef={containerRef} fromRef={gptRef} toRef={timelineRef} curvature={0} gradientStartColor="#10A37F" gradientStopColor="#3a8f85" duration={3.5} delay={0.3} />
      <AnimatedBeam containerRef={containerRef} fromRef={claudeRef} toRef={timelineRef} curvature={30} gradientStartColor="#D97706" gradientStopColor="#3a8f85" duration={3.5} delay={0.6} />

      <AnimatedBeam containerRef={containerRef} fromRef={timelineRef} toRef={topicRef} curvature={0} gradientStartColor="#3a8f85" gradientStopColor="#c8723a" duration={3.5} delay={0.5} />

      <AnimatedBeam containerRef={containerRef} fromRef={topicRef} toRef={riversRef} curvature={0} gradientStartColor="#c8723a" gradientStopColor="#3a8f85" duration={3.5} delay={1.2} />
    </div>
  );
}

export function RiversExplainer() {
  return (
    <FeatureExplainer
      notes={[
        { title: "Timeline", text: "All conversations are placed on a timeline by date, regardless of platform. This creates a unified chronological view of your communication." },
        { title: "Categorize", text: "Conversations are grouped by person or by extracted topic. You choose which dimension to visualize." },
        { title: "Streamgraph", text: "The river visualization shows how your attention flows over time. Wider streams mean more conversation activity in that topic or with that person." },
        { title: "Local", text: "All timeline and topic analysis runs on your machine using locally extracted metadata." },
      ]}
    >
      <RiversFlow />
    </FeatureExplainer>
  );
}
