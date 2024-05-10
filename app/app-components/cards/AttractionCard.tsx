"use client";

import { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import urlFor from "../../../lib/urlFor";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AttractionCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const query = '*[_type == "post"]';
      const data = await client.fetch(query);
      setData(data);
    };
    getData();
  }, []);

  return (
    <>
      {data.map((post: any, index: number) => (
        <Link href={`/attraction/${post.slug.current}`} key={index}>
          <Card
            key={post._id}
            className="w-full border-none shadow-md rounded-lg overflow-hidden cursor-pointer"
          >
            <CardHeader className="p-0">
              <figure className="relative">
                <div className="flex items-center justify-center">
                  <Image
                    src={urlFor(post?.mainImage).url()}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded shadow">
                  New
                </div>
              </figure>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="font-bold text-lg mb-2 hover:text-main">
                {post?.title}
              </CardTitle>
              <address className="text-gray-600 text-sm">
                {post?.location}
              </address>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default AttractionCard;
