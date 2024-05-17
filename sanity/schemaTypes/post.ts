import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "gallery",
      title: "gallery",
      type: "array",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
    }),
    defineField({
      name: "geopoint",
      title: "GeoPoint",
      type: "geopoint",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "availability",
      title: "Availability",
      type: "availability",
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "detailTitle",
              title: "Detail Title",
              type: "string",
            },
            {
              name: "detailDescription",
              title: "Detail Description",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "socialStack",
      title: "Social Stack",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "socialPlatform",
              title: "Social Platform",
              type: "string",
            },
            {
              name: "socialLink",
              title: "Social Link",
              type: "string",
            },
          ],
        },
      ],
    }),

    defineField({
      name: "prices",
      title: "Prices",
      type: "object",
      fields: [
        {
          name: "lowestPrice",
          title: "Lowest Price",
          type: "number",
        },
        {
          name: "highestPrice",
          title: "Highest Price",
          type: "number",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
