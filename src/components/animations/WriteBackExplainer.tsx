"use client";

import { forwardRef, useRef } from "react";
import { cn } from "../ui/cn";
import { AnimatedBeam } from "../ui/animated-beam";
import { FeatureExplainer } from "./FeatureExplainer";
import { RetraceIcon, ObsidianIcon } from "../icons/platforms";

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

function ReflectionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#c8723a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  );
}

function FormatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#3a8f85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

// PenLine icon matching Retrace sidebar
function WriteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

function WriteBackFlow() {
  const containerRef = useRef<HTMLDivElement>(null);

  const retraceRef = useRef<HTMLDivElement>(null);
  const reflectRef = useRef<HTMLDivElement>(null);
  const formatRef = useRef<HTMLDivElement>(null);
  const obsidianRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative flex w-full max-w-2xl items-center justify-center overflow-hidden rounded-lg p-8 mx-auto">
      <div className="grid grid-cols-[auto_auto_auto_auto] items-center gap-x-12 w-full justify-center">
        <div className="flex flex-col items-center">
          <Circle ref={retraceRef} className="border-[#c8723a]" label="Retrace" sublabel="Your conversations">
            <RetraceIcon className="size-6" />
          </Circle>
        </div>

        <div className="flex flex-col items-center">
          <Step ref={reflectRef} className="border-[#c8723a]" label="Reflect" sublabel="Claude generates">
            <ReflectionIcon />
          </Step>
        </div>

        <div className="flex flex-col items-center">
          <Step ref={formatRef} className="border-[#3a8f85]" label="Format" sublabel="Callout blocks">
            <FormatIcon />
          </Step>
        </div>

        <div className="flex flex-col items-center">
          <Circle ref={obsidianRef} className="border-[#7C3AED]" label="Obsidian" sublabel="Your vault">
            <ObsidianIcon />
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={retraceRef} toRef={reflectRef} gradientStartColor="#c8723a" gradientStopColor="#c8723a" duration={3.5} />
      <AnimatedBeam containerRef={containerRef} fromRef={reflectRef} toRef={formatRef} gradientStartColor="#c8723a" gradientStopColor="#3a8f85" duration={3.5} delay={0.5} />
      <AnimatedBeam containerRef={containerRef} fromRef={formatRef} toRef={obsidianRef} gradientStartColor="#3a8f85" gradientStopColor="#7C3AED" duration={3.5} delay={1} />
    </div>
  );
}

export function WriteBackExplainer() {
  return (
    <FeatureExplainer
      notes={[
        { title: "Reflect", text: "Claude generates structured reflections from your conversations, grounding insights in actual messages with source evidence." },
        { title: "Format", text: "Reflections are formatted as Obsidian callout blocks with conversation references, timestamps, and platform sources." },
        { title: "Sync", text: "Formatted notes are written to your Obsidian vault as markdown files. Retrace never modifies existing notes without confirmation." },
        { title: "Ownership", text: "Your reflections live in your vault as plain markdown. No lock-in. Delete Retrace and your notes stay." },
      ]}
    >
      <WriteBackFlow />
    </FeatureExplainer>
  );
}
