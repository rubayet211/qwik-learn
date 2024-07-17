import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header>
      <Link href="/about">About</Link>
    </header>
  );
});
