import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}

const UserDetails = ({ params }: Props) => {
  if (params.id > 10) notFound();
  return <div>UserDetails {params.id}</div>;
};

export default UserDetails;
