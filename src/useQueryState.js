import { useEffect, useState } from "react";
import queryString from "query-string";
import _ from "lodash";
import { useHistory, useLocation } from "react-router-dom";

export const useQueryState = () => {
  const history = useHistory();
  const location = useLocation();
  const [parsedQuery, setParsedQuery] = useState({});

  useEffect(() => {
    const query = queryString.parse(location.search);
    setParsedQuery(query);
  }, [location.search]);

  const updateQuery = update => {
    const oldQuery = queryString.parse(location.search);
    const newQuery = { ...oldQuery, ...update };

    // skip history update if old and new queries are the same
    if (!_.isEqual(oldQuery, newQuery)) {
      history.push({
        search: queryString.stringify(newQuery)
      });
    }
  };

  return [parsedQuery, updateQuery];
};
