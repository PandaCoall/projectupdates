import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { EmailGate } from "@/components/tracker-app";

export const Route = createFileRoute("/enter")({
  component: EnterPage,
});

function EnterPage() {
  const navigate = useNavigate();
  return (
    <EmailGate
      onMatch={(member) => {
        sessionStorage.setItem("hyrax-team-email", member.email);
        navigate({ to: "/" });
      }}
    />
  );
}
