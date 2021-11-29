import { ADD_SENT_MESSAGE, LOADING_MESSAGES_SUCCESS } from "../types/messages";
let defaultMessages = [
  {
    message: "Hi Henry!",
    from: true,
  },
  {
    message: "How can i help you today ?",
    from: true,
  },
  {
    message: "Hey Bill, nice to meet you!",
    from: false,
  },
  {
    message: "Hope you're doing fine.",
    from: false,
  },
  {
    message: "I'm good thanks for asking",
    from: true,
  },
  {
    message: "I'm interested to know about your prices and services you offer",
    from: false,
  },
  {
    message:
      "Sure, please check below link to find more useful information http://mazepixel.com/portfolio",
    from: true,
  },
  {
    message:
      "Awesome, will get n touch if there's anything unclear. Thanks for now!",
    from: false,
  },
  {
    message: "Have a great day!",
    from: false,
  },
  {
    message: "Thanks buddy. you too as well",
    from: true,
  },
];
export function messages(state = { messages: defaultMessages }, action) {
  const { type, body } = action;
  switch (type) {
    case LOADING_MESSAGES_SUCCESS:
      return { ...state, messages: body.messages };
    case ADD_SENT_MESSAGE:
      return { ...state, messages: state.messages.concat([{ ...action }]) };
    default:
      return { ...state };
  }
}
