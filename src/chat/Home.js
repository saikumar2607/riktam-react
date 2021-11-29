import React from "react";
import { Paper } from "@material-ui/core";
import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";
import Chats from "./Chat";

export default function ChatPage() {
  return (
    <Paper
      style={{
        margin: 25,
        display: "flex",
        // justifyContent: "space-between",
        borderRadius: 15,
      }}
    >
      <LeftPanel />
      <Chats />
      <RightPanel />
    </Paper>
  );
}
