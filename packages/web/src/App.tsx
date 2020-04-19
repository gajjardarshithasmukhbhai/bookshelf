import {gql, NetworkStatus, useQuery} from "@apollo/client";
import React from 'react';

export const MESSAGE_QUERY = gql`
  query getMessage {
    message
  }
`;

export const App: React.FunctionComponent = () => {
  const { data, networkStatus } = useQuery<{ message: string }>(
      MESSAGE_QUERY,
      {
        notifyOnNetworkStatusChange: true
      }
  );

  if (networkStatus === NetworkStatus.loading) {
    return <span>Message is loading...</span>;
  }

  return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
            {data?.message}
        </header>
      </div>
  );
};
