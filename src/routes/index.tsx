import { createFileRoute } from "@tanstack/react-router";
import { TrackerApp } from "@/components/tracker-app";

export const Route = createFileRoute("/")({ component: TrackerApp });
