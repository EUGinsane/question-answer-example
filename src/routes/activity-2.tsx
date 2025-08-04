import { createFileRoute } from "@tanstack/react-router";
import Activity2 from "../components/Activity2";

export const Route = createFileRoute("/activity-2")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Activity2 />;
}
