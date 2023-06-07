import { defineField } from "sanity";

export const products = {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Product Sub Title",
      type: "string",
    },
    {
      name: "price",
      title: "Product Price",
      type: "number",
    },
    {
      name: "description",
      title: "Product Description",
      type: "string",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
    },
    defineField({
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    }),
  ],
};
