import { AnyAction } from "redux";

interface UserData {
  name: string;
  surname: string;
  email: string;
}

const initialState: UserData = {
  name: '',
  surname: '',
  email: ''
};

export const user = (state = initialState, action: AnyAction) => {
    switch (action.type) {
      default:
        return state;
    }
};
