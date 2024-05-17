"use client";

import { client } from "../../../sanity/lib/client";
import { Post } from "@/lib/interface";

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

const AttractionLogic = async (params: any) => {
  const data = (await getData(params?.slug)) as Post;
  return { data };
};

export default AttractionLogic;
