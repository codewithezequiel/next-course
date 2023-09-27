import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}
const Users = ({ searchParams }: Props) => {
  console.log(searchParams.sortOrder);
  return (
    <>
      <h1>Users</h1>
      <Link className="btn mb-5" href="/users/new">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={searchParams.sortOrder} />
      </Suspense>
    </>
  );
};

export default Users;
