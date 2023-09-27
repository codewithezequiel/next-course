"use client";
import React from "react";
import { useRouter } from "next/navigation";

const UsersPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Welcome!</h1>
      <button onClick={() => router.push("/users")} className="btn btn-primary">
        Create
      </button>
    </div>
  );
};

export default UsersPage;
