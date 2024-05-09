import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex justify-center">
      <div className="mt-40">
        <SignIn path="/sign-in" />
      </div>
    </section>
  );
}
