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

const AttractionCard = () => {
  const { attractions, fetchAttractions } = useStore();

  useEffect(() => {
    fetchAttractions();
  }, []);

  return (
    <>
      {attractions.map((post: any, index: number) => (
        <Link href={`/attraction/${post.slug.current}`} key={index}>
          <Card className="w-full max-w-sm">
            <div className="relative">
              <img
                alt="Card Image"
                className="w-full h-auto"
                height="240"
                src={urlFor(post?.mainImage, 400, 240)}
                style={{
                  aspectRatio: "400/240",
                  objectFit: "cover",
                }}
                width="400"
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
    </>
  );
};

export default AttractionCard;
