import { redirect } from "next/navigation";
import { Analytics } from "@vercel/analytics/next"

export default function RootPage() {
  redirect("/en");
}
<Analytics />
