import { Post } from "./interface";
import { client } from "../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: Post, width?: number, height?: number) {
  let url = builder.image(source);
  if (width && height) {
    url = url.width(width).height(height).auto("format");
  }
  return url.url();
}

export default urlFor;
