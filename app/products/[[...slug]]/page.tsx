import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}
const ProductPage = ({ params, searchParams }: Props) => {
  return (
    <div>
      ProductPage {params.slug} {searchParams.sortOrder}
    </div>
  );
};

export default ProductPage;
