import React from "react";
import Content from "../Components/Content";
import Solutions from "../Components/Solutions";
import Ressources from "../Components/Ressources";

const initialState = {
  content: <Content />,
};

const showDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "content":
      return { content: <Content /> };

    case "ressource":
      return { content: <Ressources /> };

    case "solutions":
      return { content: <Solutions /> };

    case "pricing":
      return {
        content: (
          <div>
            <h2>Nothing for the moment!</h2>
          </div>
        ),
      };

    default:
      return state;
  }
};

export default showDataReducer;
