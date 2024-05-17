"use client";

import { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import urlFor from "../../../lib/urlFor";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useStore } from "@/app/state/useStore";
import { Badge } from "@/components/ui/badge";
import { checkNewPost } from "@/lib/checkNewPost";
import { Button } from "@/components/ui/button";
import { url } from "inspector";

const AttractionCard = () => {
  const { attractions, fetchAttractions, isLoadingMore, page, pageSize } =
    useStore();

  useEffect(() => {
    fetchAttractions(1, 10);
  }, []);

  return (
    <>
      {attractions.map((post: any, index: number) => (
        <Link href={`/attraction/${post.slug.current}`} key={index}>
          <Card className="w-full max-w-sm">
            <div className="relative">
              <Image
                width={400}
                height={240}
                alt="Card Image"
                className="w-full h-auto object-cover aspect-video"
                src={urlFor(post?.mainImage).url()}
              />
              {checkNewPost(post._createdAt) && (
                <Badge className="absolute top-2 left-2 bg-gray-900 text-white px-2 py-1 rounded-md">
                  New
                </Badge>
              )}
            </div>
            <CardContent>
              <CardTitle className="text-lg font-medium mb-1 mt-3">
                {post.title}
              </CardTitle>
              <CardDescription className="text-gray-500 text-sm">
                {post.location}
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}

      {/* <p>Continue exploring amazing attractions</p>
      {isLoadingMore ? (
        <p>Loading more attractions...</p>
      ) : (
        <Button variant="default" className="capitalize text-lg">
          Load More
        </Button>
      )} */}
    </>
  );
};

export default AttractionCard;
