import React from "react";

import { Provider, useDispatch } from "react-redux";
import KeplerGl from "kepler.gl";
import { addDataToMap } from "kepler.gl/actions";
import useSwr from "swr";


export default function App() {
  return (
      <Map />
  );
}

function Map() {
  const dispatch = useDispatch();
  const { data } = useSwr("covid", async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/leighhalliday/a994915d8050e90d413515e97babd3b3/raw/a3eaaadcc784168e3845a98931780bd60afb362f/covid19.json"
    );
    const data = await response.json();
    return data;
  });

  React.useEffect(() => {
    if (data) {
      dispatch(
        addDataToMap({
          datasets: {
            info: {
              label: "COVID-19",
              id: "covid19",
            },
            data,
          },
          option: {
            centerMap: true,
            readOnly: false,
          },
          config: {},
        })
      );
    }
  }, [dispatch, data]);

  return (
    <KeplerGl
      id="covid"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}
