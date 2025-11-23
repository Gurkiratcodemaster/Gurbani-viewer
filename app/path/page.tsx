import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import PageViewer from "../components/PageViewer";

export default async function PathPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  if (!session) {
    redirect("/login");
  }

  return <PageViewer initialAng={1} />;
}
