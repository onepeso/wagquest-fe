import { Post } from "./interface";
import { client } from "../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: Post) {
  return builder.image(source);
}

export default urlFor;
