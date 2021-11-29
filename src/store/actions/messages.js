import { ADD_SENT_MESSAGE } from "../types/messages";
export const onSendMessage = (msgText) => (dispatch) => {
  dispatch({ type: ADD_SENT_MESSAGE, message: msgText, from: true });
};
