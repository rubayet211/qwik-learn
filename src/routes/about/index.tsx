import { component$, useStyles$ } from "@builder.io/qwik";
import AboutStyles from "./about.css?inline";

export default component$(() => {
  useStyles$(AboutStyles);
  return (
    <article>
      <h2>About</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
        cupiditate, dolores debitis quod perferendis explicabo sunt rerum
        reiciendis impedit tempore labore assumenda, quaerat recusandae
        accusantium at animi autem eos nihil!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
        cupiditate, dolores debitis quod perferendis explicabo sunt rerum
        reiciendis impedit tempore labore assumenda, quaerat recusandae
        accusantium at animi autem eos nihil!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
        cupiditate, dolores debitis quod perferendis explicabo sunt rerum
        reiciendis impedit tempore labore assumenda, quaerat recusandae
        accusantium at animi autem eos nihil!
      </p>
    </article>
  );
});
