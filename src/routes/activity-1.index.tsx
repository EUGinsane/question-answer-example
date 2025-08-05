import { createFileRoute } from "@tanstack/react-router";
import Activity1 from "../components/Activity1";

export const Route = createFileRoute("/activity-1/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Activity1 />;
}
