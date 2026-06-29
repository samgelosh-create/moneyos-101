import { Card } from "@/components/ui";

const GOALS = ["Build $1k emergency fund", "Pay off credit card"];

export default function Profile() {
  return (<div>
    <h1 className="text-2xl font-medium">Profile</h1>
    <Card className="mt-4">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brandsoft font-medium text-brand">S</span>
        <div><h3 className="font-medium">Your account</h3><p className="text-sm text-muted">Money IQ 62 · 6-day streak</p></div>
      </div>
    </Card>
    <Card className="mt-3">
      <h3 className="font-medium">Goals</h3>
      <ul className="mt-2 space-y-1 text-sm">{GOALS.map((g) => <li key={g}>• {g}</li>)}</ul>
    </Card>
    <Card className="mt-3">
      <h3 className="font-medium">Settings</h3>
      <p className="mt-1 text-sm text-muted">Account, notifications, and data controls live here. Authentication is handled by Supabase Auth.</p>
    </Card>
  </div>);
}
