"use client";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn, useSession } from "next-auth/react";

export const Like = ({ movieId }) => {
  const { data: session } = useSession();
  const handleLikeClicked = async (e) => {
    e.preventDefault();
    if (!session) {
      signIn();
    }
    await fetch(`/api/like/${movieId}`, { method: "POST" });
  };
  return (
    <div
      style={{
        position: "absolute",
        right: "-20px",
        top: "5px",
        width: "50px",
        height: "50px",
        zIndex: "99",
        color: "red",
        backgroundColor: "white",
        borderRadius: "100%",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={handleLikeClicked}
    >
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
};
