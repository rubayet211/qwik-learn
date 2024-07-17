import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ContactStyles from "./contact.css?inline";

export default component$(() => {
  useStylesScoped$(ContactStyles);

  return (
    <article>
      <h2>Contact</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
        cupiditate, dolores debitis quod perferendis explicabo sunt rerum
        reiciendis impedit tempore labore assumenda, quaerat recusandae
        accusantium at animi autem eos nihil!
      </p>
    </article>
  );
});
