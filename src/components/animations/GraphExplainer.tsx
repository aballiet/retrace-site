"use client";

import { GraphBuildUp } from "./GraphBuildUp";
import { FeatureExplainer } from "./FeatureExplainer";

export function GraphExplainer() {
  return (
    <FeatureExplainer
      notes={[
        {
          title: "Analyze",
          text: "Retrace scans all your conversations to identify who you interact with, how often, and on which platforms.",
        },
        {
          title: "Tie strength",
          text: "Each relationship gets a score based on frequency, recency, reciprocity, and platform diversity. Talking to someone on both WhatsApp and Messenger signals a stronger tie.",
        },
        {
          title: "Dunbar tiers",
          text: "People are grouped into concentric circles inspired by Dunbar's number: inner circle (~5), active (~15), and extended (~150). These reflect real cognitive limits on relationships.",
        },
        {
          title: "Graph",
          text: "A force-directed layout positions nodes based on tie strength. Closer nodes mean stronger relationships. Timelapse mode lets you watch connections form over months.",
        },
        {
          title: "Local",
          text: "All relationship analysis happens on your machine. No social graph data is ever sent externally.",
        },
      ]}
    >
      <GraphBuildUp />
    </FeatureExplainer>
  );
}
