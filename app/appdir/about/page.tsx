import Link from "next/link";

import { Button } from "./button";

export default function Page() {
  return (
    <>
      <h1>This is the basic example.</h1>
      <Link href="/appdir">Home page</Link>
      <Button />
    </>
  );
}