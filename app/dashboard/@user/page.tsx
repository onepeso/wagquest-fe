import { currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  const user = await currentUser();

  return (
    <>
      <p>Hello, {user?.firstName}</p>
      <p></p>
      <div>This is the user dashboard</div>
      <p>User Dashboard WIP</p>
    </>
  );
}
