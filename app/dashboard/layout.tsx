import { auth } from "@clerk/nextjs/server";
import { CheckUserRole } from "../../lib/CheckUserRole";

export default function Layout({ user, admin }: any) {
  auth().protect();
  const role = CheckUserRole();

  console.log("role", role);
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white py-6 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {role === "admin" ? admin : user}
      </main>
    </div>
  );
}
