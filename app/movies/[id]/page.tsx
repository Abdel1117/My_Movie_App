import React from "react";

interface MovieIdPageProps {
  params: {
    id: string;
  };
}
export const MovieIdPage = async ({ params }: MovieIdPageProps) => {
  const { id } = await params;

  return (
    <div>
      <h1>Movie Details Page id : {id}</h1>
    </div>
  );
};

export default MovieIdPage;
