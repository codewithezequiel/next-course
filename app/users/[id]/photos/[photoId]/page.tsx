import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const PhotoPage = ({ params }: Props) => {
  return <div>PhotoPage {params.id} {params.photoId}</div>;
};

export default PhotoPage;
