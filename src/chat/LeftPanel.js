import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Switch,
  styled,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItem,
  ListItemText,
  List,
} from "@material-ui/core";
import { ExpandMore, SettingsOutlined } from "@material-ui/icons";
import React from "react";
import { connect } from "react-redux";
class MyChats extends React.Component {
  render() {
    return (
      <Box style={{ width: "25%" }}>
        <Card
          variant="outlined"
          style={{
            // width: 175,
            marginLeft: 15,
            marginTop: 15,
            background: "#edf7fc",
            borderRadius: 10,
          }}
        >
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar>HB</Avatar>
            <div
              style={{ display: "flex", flexDirection: "row", marginTop: 5 }}
            >
              <Typography style={{ fontSize: 15 }}>Bill Bradford</Typography>
              <SettingsOutlined style={{ fontSize: "1rem", marginTop: 3 }} />
            </div>
            <Typography style={{ fontSize: 8 }}>Lead UX/UI Designer</Typography>
            <div
              style={{ display: "flex", flexDirection: "row", marginTop: 5 }}
            >
              <AntSwitch checked={true} />
              <Typography style={{ fontSize: 10, marginLeft: 5, marginTop: 1 }}>
                Active
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Accordion
          elevation={0}
          style={{
            marginLeft: 15,
            marginTop: 15,
          }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <div style={{ display: "flex" }}>
              <Typography>Active Conversations</Typography>
              <span
                style={{
                  height: 20,
                  width: 20,
                  backgroundColor: "#D8D8D8",
                  marginLeft: 10,
                  borderRadius: "50%",
                  display: "inline-block",
                  fontSize: 13,
                }}
              >
                {5}
              </span>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem
                style={{
                  cursor: "pointer",
                  background: "#edf7fc",
                  borderRadius: 10,
                }}
              >
                <Avatar></Avatar>
                <ListItemText style={{ marginLeft: 10 }}>
                  Henry Boyd
                </ListItemText>
              </ListItem>
              <ListItem style={{ cursor: "pointer" }}>
                <Avatar></Avatar>
                <ListItemText style={{ marginLeft: 10 }}>
                  Martha Curtis
                </ListItemText>
              </ListItem>
              <ListItem style={{ cursor: "pointer" }}>
                <Avatar></Avatar>
                <ListItemText style={{ marginLeft: 10 }}>
                  Phillip Tucker
                </ListItemText>
              </ListItem>
              <ListItem style={{ cursor: "pointer" }}>
                <Avatar></Avatar>
                <ListItemText style={{ marginLeft: 10 }}>
                  CHristine Reid
                </ListItemText>
              </ListItem>
              <ListItem style={{ cursor: "pointer" }}>
                <Avatar></Avatar>
                <ListItemText style={{ marginLeft: 10 }}>
                  Jerry Guzman
                </ListItemText>
              </ListItem>
              <ListItem style={{ cursor: "pointer" }}>
                <Avatar></Avatar>
                <ListItemText style={{ marginLeft: 10 }}>
                  Russel Williams
                </ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          style={{
            marginLeft: 15,
            marginTop: 15,
          }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <div style={{ display: "flex" }}>
              <Typography>Archived Conversations</Typography>
              <span
                style={{
                  height: 20,
                  width: 20,
                  backgroundColor: "#D8D8D8",
                  marginLeft: 10,
                  borderRadius: "50%",
                  display: "inline-block",
                  fontSize: 13,
                }}
              >
                {7}
              </span>
            </div>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      </Box>
    );
  }
}
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

export default connect(null, {})(MyChats);
