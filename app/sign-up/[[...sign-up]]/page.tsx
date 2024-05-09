import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex justify-center">
      <div className="mt-40">
        <SignUp path="/sign-up" />
      </div>
    </section>
  );
}
