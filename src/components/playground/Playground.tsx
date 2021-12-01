import React, { useState, useEffect } from "react";

export interface PlaygroundProps {
  game: string;
}

export const Playground = (props: PlaygroundProps) => {
  const { game } = props;
  const [message, updateMessage] = useState("Hello amigos");
  const [firstName, setFirstName] = useState("");

  const handleUpdateMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateMessage(value);
  };

  useEffect(() => {
    // COMPONENT DID MOUNT
    console.log("COMPONENT DID MOUNT IN EFFECT");
    return () => {
      console.log("COMPONENT WILL UMOUNT");
    };
  });

  useEffect(() => {
    // COMPONENT WILL UNMOUNT
    return () => {
      console.log("COMPONENT WILL UMOUNT");
    };
  });

  useEffect(() => {
    // COMPONENT DID UPDATE
    console.log("Updated");
  }, [message]);

  return (
    <>
      <h1>{message}</h1>
      {/* FIRST APPROACH AND BETTER PRACTICE */}
      <input
        type="text"
        onChange={(e) => handleUpdateMessage(e)}
        value={message || ""}
      />

      {/* SECOND APPROACH */}
      {/* <input
        type="text"
        onChange={(e) => updateMessage(e.target.value)}
        value={message || ""}
      /> */}
    </>
  );
};
