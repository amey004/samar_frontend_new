import React from "react";
import { useEffect, useState } from "react";
import {useDispatch } from "react-redux";
import KeplerGl from "kepler.gl";
import {Box} from "@material-ui/core";
import { addDataToMap } from "kepler.gl/actions";
import useSwr from "swr";
import helpers from "./helper";

const DATA_URL =
  "https://gist.githubusercontent.com/ejdoh1/1b58de3ccfcfeed1e84c29c35867dbe9/raw/1c151de13ceecc17b73ca9fb1defffdec7f285a6/sampleTripData.json";

  const sampleConfig = {
  visState: {
    filters: [
      {
        id: "me",
        dataId: "test_trip_data",
        name: "tpep_pickup_datetime",
        type: "timeRange",
        enlarged: true,
      },
    ],
  },
};

const sampleTripData = {
  fields: [
    {name: 'tpep_pickup_datetime', format: 'YYYY-M-D H:m:s', type: 'timestamp'},
    {name: 'pickup_longitude', format: '', type: 'real'},
    {name: 'pickup_latitude', format: '', type: 'real'}
  ],
  rows: [
    ['2015-01-15 19:05:39 +00:00', -73.99389648, 40.75011063],
    ['2015-01-15 19:05:39 +00:00', -73.97642517, 40.73981094],
    ['2015-01-15 19:05:40 +00:00', -73.96870422, 40.75424576]
  ]
};

function Map() {
  console.log("In map function");
  const [sampleTripData, setSampleTripData] = useState();
  const dispatch = useDispatch();

  const fetchData = async () => {
    console.log("Fetch data me hai");
    setSampleTripData(await helpers.httpGet(DATA_URL));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    sampleTripData &&
      dispatch(
        addDataToMap({
          datasets: {
            info: {
              label: "Sample Taxi Trips in New York City",
              id: "test_trip_data",
            },
            data: sampleTripData,
          },
          option: {
            centerMap: true,
            readOnly: false,
          },
          config: sampleConfig,
        })
      );
  }, [dispatch, sampleTripData]);

  return (
    <div>
      <Box>
      <KeplerGl
      id="map"
      width={window.innerWidth}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
      height={window.innerHeight}
    />
      </Box>
    </div>
  );
}

export default Map;