import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import HeaderStyles from "./header.css?inline";
import ImgBanana from "/public/banana.png?jsx";

export default component$(() => {
  useStyles$(HeaderStyles);

  return (
    <header>
      <nav>
        <ImgBanana />
        <h1>Mar Khawa Life</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
