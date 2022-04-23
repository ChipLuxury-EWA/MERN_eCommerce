import axios from "axios";

export const loginUser = async (email, password) => {
    const { data } = await axios.post(
        "user/login",
        { email, password },
        { Headers: { "Content-Type": "application/json" } }
    );
    return data;
};
