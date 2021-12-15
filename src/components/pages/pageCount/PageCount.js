import { useEffect, useState } from "react";
import axios from "axios";

import React from "react";

const PageCount = () => {
  const [count, setCount] = useState();

  const FetchData = async () => {
    const response = await axios.get(
      "https://vho8s05s99.execute-api.us-east-2.amazonaws.com/visitorCounter"
    );
    setCount(response.data);
  };

  // UseEffect runs code on every render!!!
  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div>
      <div className="card light-blue darken-4 z-depth-0">
        <div className="card-content">
          <h6 className="white-text">
            <strong>PAGE VIEWS: {count} </strong>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default PageCount;