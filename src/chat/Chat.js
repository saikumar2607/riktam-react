import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  styled,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import { Attachment, EmojiEmotionsOutlined, Send } from "@material-ui/icons";
import { onSendMessage } from "../store/actions/messages";

class Chats extends React.Component {
  state = { message: "" };
  messageEndRef = React.createRef();
  scrollToBottom = () => {
    this.messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  componentDidMount() {
    this.setState({ clickedUserId: this.props.clickedUserId });
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  onSend = () => {
    if (this.state.message.trim().length) {
      this.props.onSendMessage(this.state.message);
      this.scrollToBottom();
    }
    this.setState({ message: "" });
  };
  render() {
    return (
      <Card
        style={{
          width: "50%",
          background: "#edf7fc",
          margin: 15,
          borderRadius: 10,
        }}
      >
        <CardContent>
          {this.props.messages.map((message, index) => {
            return (
              <div
                key={index}
                className={message.from === false ? "left-chat" : "right-chat"}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex" }}>
                    {message.from === false ? (
                      <Avatar style={{ marginRight: 10 }} />
                    ) : (
                      ""
                    )}
                    <Paper
                      className={
                        message.from === true ? "self-block" : "message-block"
                      }
                      style={{ textAlign: "left" }}
                    >
                      <div>{message.message}</div>
                    </Paper>
                    {message.from === true ? (
                      <Avatar style={{ marginLeft: 10 }} />
                    ) : (
                      ""
                    )}
                  </div>
                  <p style={{ fontSize: 10, margin: 5 }}>5 hrs ago</p>
                </div>
                <div ref={this.messageEndRef} />
              </div>
            );
          })}
          <div
            style={{
              display: "flex",
              background: "#fff",
              padding: 20,
              borderRadius: 20,
              //   width: "80%",
            }}
          >
            <IconButton>
              <Attachment />
            </IconButton>
            <SearchBox
              onChange={(e) => this.setState({ message: e.target.value })}
              value={this.state.message}
              style={{ marginRight: 28, width: "90%" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <EmojiEmotionsOutlined style={{ color: "#ffd500" }} />
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button
              onClick={this.onSend}
              variant="contained"
              style={{
                background: "#2727ff",
                padding: 10,
                color: "#fff",
                borderRadius: 10,
                textTransform: "capitalize",
              }}
            >
              <Typography style={{ marginLeft: 15 }}>Send</Typography>
              <Send style={{ marginRight: 15 }} />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
}
const SearchBox = styled(OutlinedInput)(() => ({
  "& input": {
    padding: "10px",
    width: "300px",
  },
  "& fieldset": {
    borderRadius: "5px",
  },
}));
export default connect(({ messages }) => ({ messages: messages.messages }), {
  onSendMessage,
})(Chats);
