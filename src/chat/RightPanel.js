import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  IconButton,
} from "@material-ui/core";
import {
  AccessTimeOutlined,
  DeleteOutlined,
  Link,
  MailOutlineOutlined,
} from "@material-ui/icons";

export default function RightPanel() {
  return (
    <Box style={{ width: "25%" }}>
      <Card
        variant="outlined"
        style={{
          // width: 175,
          marginRight: 15,
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
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 5,
              }}
            >
              <MailOutlineOutlined variant style={{ height: 20, width: 20 }} />
              <Typography style={{ fontSize: 10, marginTop: 2, marginLeft: 5 }}>
                henryboyd@gmail.com
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 10,
              }}
            >
              <Avatar style={{ height: 20, width: 20 }} />
              <Typography style={{ fontSize: 10, marginTop: 2, marginLeft: 5 }}>
                Henry Boyd
              </Typography>
            </div>
          </div>
          <Button
            variant="outlined"
            style={{ color: "blue", border: "1px solid blue" }}
          >
            <Typography style={{ textTransform: "capitalize" }}>
              Archive
            </Typography>
            <DeleteOutlined />
          </Button>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        style={{
          // width: 175,
          marginRight: 15,
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
          <Box style={{ display: "flex" }}>
            <Card
              style={{
                borderRadius: 10,
              }}
            >
              <CardContent style={{ width: 120 }}>
                <div style={{ display: "flex" }}>
                  <IconButton style={{ color: "blue" }}>
                    <AccessTimeOutlined />
                  </IconButton>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography style={{ fontSize: 12 }}>13h</Typography>
                    <Typography style={{ fontSize: 12 }}>Time</Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card
              style={{
                borderRadius: 10,
              }}
            >
              <CardContent style={{ width: 120 }}>
                <div style={{ display: "flex" }}>
                  <IconButton style={{ color: "blue" }}>
                    <AccessTimeOutlined />
                  </IconButton>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography style={{ fontSize: 12 }}>188</Typography>
                    <Typography style={{ fontSize: 12 }}>Atendeed</Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Box>
          <Box style={{ display: "flex" }}>
            <Card
              style={{
                borderRadius: 10,
              }}
            >
              <CardContent style={{ width: 120 }}>
                <div style={{ display: "flex" }}>
                  <IconButton style={{ color: "blue" }}>
                    <AccessTimeOutlined />
                  </IconButton>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography style={{ fontSize: 12 }}>119</Typography>
                    <Typography style={{ fontSize: 12 }}>Meetings</Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card
              style={{
                borderRadius: 10,
              }}
            >
              <CardContent style={{ width: 120 }}>
                <div style={{ display: "flex" }}>
                  <IconButton style={{ color: "blue" }}>
                    <AccessTimeOutlined />
                  </IconButton>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography style={{ fontSize: 12 }}>41</Typography>
                    <Typography style={{ fontSize: 12 }}>Rejected</Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Box>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        style={{
          // width: 175,
          marginRight: 15,
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
          <Typography style={{ fontWeight: "bold" }}>
            Onboard Clients
          </Typography>
          <Typography style={{ fontSize: 11 }}>
            Share the link with prospects and discuss all stuff
          </Typography>
          <Button
            style={{ background: "#2727ff", color: "#fff", borderRadius: 10 }}
          >
            <Typography style={{ textTransform: "capitalize" }}>
              Copy Link
            </Typography>
            <Link />
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
