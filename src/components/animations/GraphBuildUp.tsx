"use client";

import { forwardRef, useRef } from "react";
import { cn } from "../ui/cn";
import { AnimatedBeam } from "../ui/animated-beam";
import { WhatsAppIcon, MessengerIcon, InstagramIcon, platformColors } from "../icons/platforms";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string; sublabel?: string }
>(({ className, children, label, sublabel }, ref) => {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {children}
      </div>
      {label && (
        <span className="text-[10px] font-semibold text-gray-600 text-center max-w-[80px] leading-tight">
          {label}
        </span>
      )}
      {sublabel && (
        <span className="text-[9px] text-gray-400 text-center max-w-[90px] leading-tight">
          {sublabel}
        </span>
      )}
    </div>
  );
});
Circle.displayName = "Circle";

const Step = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string; sublabel?: string }
>(({ className, children, label, sublabel }, ref) => {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        ref={ref}
        className={cn(
          "z-10 flex h-14 items-center justify-center rounded-xl border-2 bg-white px-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {children}
      </div>
      {label && (
        <span className="text-[10px] font-semibold text-gray-600 text-center leading-tight">
          {label}
        </span>
      )}
      {sublabel && (
        <span className="text-[9px] text-gray-400 text-center max-w-[90px] leading-tight">
          {sublabel}
        </span>
      )}
    </div>
  );
});
Step.displayName = "Step";

function InteractionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#3a8f85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function TieIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#c8723a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );
}

function DunbarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#c8723a" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="7" strokeDasharray="3 3" />
      <circle cx="12" cy="12" r="10.5" strokeDasharray="2 4" />
    </svg>
  );
}

function GraphIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#3a8f85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M12 7v4M7.5 17.5L11 13M16.5 17.5L13 13" />
      <circle cx="12" cy="12" r="1.5" fill="#3a8f85" />
    </svg>
  );
}

export function GraphBuildUp() {
  const containerRef = useRef<HTMLDivElement>(null);

  const waRef = useRef<HTMLDivElement>(null);
  const msgRef = useRef<HTMLDivElement>(null);
  const igRef = useRef<HTMLDivElement>(null);

  const interactionRef = useRef<HTMLDivElement>(null);
  const tieRef = useRef<HTMLDivElement>(null);

  const innerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);
  const extendedRef = useRef<HTMLDivElement>(null);

  const graphRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full max-w-3xl items-center justify-center overflow-hidden rounded-lg p-8 mx-auto"
    >
      <div className="grid grid-cols-[1fr_1fr_1fr_auto] items-center gap-x-10 w-full">
        {/* Sources */}
        <div className="flex flex-col items-center gap-5">
          <Circle ref={waRef} className="border-[#25D366]" label="WhatsApp">
            <WhatsAppIcon />
          </Circle>
          <Circle ref={msgRef} className="border-[#0084FF]" label="Messenger">
            <MessengerIcon />
          </Circle>
          <Circle ref={igRef} className="border-[#E4405F]" label="Instagram">
            <InstagramIcon />
          </Circle>
        </div>

        {/* Processing */}
        <div className="flex flex-col items-center gap-5">
          <Step ref={interactionRef} className="border-[#3a8f85]" label="Analyze" sublabel="Who talks to whom">
            <InteractionIcon />
          </Step>
          <Step ref={tieRef} className="border-[#c8723a]" label="Tie strength" sublabel="Frequency, recency">
            <TieIcon />
          </Step>
        </div>

        {/* Dunbar tiers */}
        <div className="flex flex-col items-center gap-5">
          <Circle ref={innerRef} className="border-[#3a8f85]" label="Inner circle" sublabel="~5 people">
            <DunbarIcon />
          </Circle>
          <Circle ref={activeRef} className="border-[#c8723a]" label="Active" sublabel="~15 people">
            <DunbarIcon />
          </Circle>
          <Circle ref={extendedRef} className="border-gray-300" label="Extended" sublabel="~150 people">
            <DunbarIcon />
          </Circle>
        </div>

        {/* Result */}
        <div className="flex flex-col items-center">
          <Circle ref={graphRef} className="border-[#3a8f85]" label="Network graph" sublabel="Force-directed">
            <GraphIcon />
          </Circle>
        </div>
      </div>

      {/* Sources → Analyze */}
      <AnimatedBeam containerRef={containerRef} fromRef={waRef} toRef={interactionRef} curvature={-30} gradientStartColor="#25D366" gradientStopColor="#3a8f85" duration={3.5} />
      <AnimatedBeam containerRef={containerRef} fromRef={msgRef} toRef={interactionRef} curvature={0} gradientStartColor="#0084FF" gradientStopColor="#3a8f85" duration={3.5} delay={0.3} />
      <AnimatedBeam containerRef={containerRef} fromRef={igRef} toRef={interactionRef} curvature={30} gradientStartColor="#E4405F" gradientStopColor="#3a8f85" duration={3.5} delay={0.6} />

      {/* Analyze → Tie strength */}
      <AnimatedBeam containerRef={containerRef} fromRef={interactionRef} toRef={tieRef} curvature={0} gradientStartColor="#3a8f85" gradientStopColor="#c8723a" duration={3.5} delay={0.5} />

      {/* Tie strength → Dunbar tiers */}
      <AnimatedBeam containerRef={containerRef} fromRef={tieRef} toRef={innerRef} curvature={-30} gradientStartColor="#c8723a" gradientStopColor="#3a8f85" duration={3.5} delay={1} />
      <AnimatedBeam containerRef={containerRef} fromRef={tieRef} toRef={activeRef} curvature={0} gradientStartColor="#c8723a" gradientStopColor="#c8723a" duration={3.5} delay={1.3} />
      <AnimatedBeam containerRef={containerRef} fromRef={tieRef} toRef={extendedRef} curvature={30} gradientStartColor="#c8723a" gradientStopColor="#9c958e" duration={3.5} delay={1.6} />

      {/* Tiers → Graph */}
      <AnimatedBeam containerRef={containerRef} fromRef={innerRef} toRef={graphRef} curvature={-20} gradientStartColor="#3a8f85" gradientStopColor="#3a8f85" duration={3.5} delay={2} />
      <AnimatedBeam containerRef={containerRef} fromRef={activeRef} toRef={graphRef} curvature={0} gradientStartColor="#c8723a" gradientStopColor="#3a8f85" duration={3.5} delay={2.3} />
      <AnimatedBeam containerRef={containerRef} fromRef={extendedRef} toRef={graphRef} curvature={20} gradientStartColor="#9c958e" gradientStopColor="#3a8f85" duration={3.5} delay={2.6} />
    </div>
  );
}
