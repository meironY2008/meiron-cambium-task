import axios from "axios";
import { START_LOADING, FINISH_LOADING, ERROR, SET_SHORT_URL } from "./types";

export const getShortUrl = (linkToShort) => async (dispach) => {
  try {
    dispach({ type: START_LOADING });
    const { data } = await axios(
      `https://api.shrtco.de/v2/shorten?url=${linkToShort}`
    );
    console.log(data.result.full_short_link);
    dispach({ type: SET_SHORT_URL, payload: data.result.full_short_link });
  } catch (err) {
    dispach({ type: ERROR });
  } finally {
    dispach({ type: FINISH_LOADING });
  }
};
