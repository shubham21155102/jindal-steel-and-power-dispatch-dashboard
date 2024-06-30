"use client";
import React, { useEffect, useState } from 'react';

type Props = {}

const VehicleDetails = (props: any) => {
  const slug = props.params.slug;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [TotalTrips, setTotalTrips] = useState(0);
  const [TotalTime, setTotalTime] = useState(0);

  const mapping: any = {
    "tipper": "Tipper",
    "surface_miner": "Surface Miner",
    "excavator": "Excavator"
  };

  const calculateDuration = (startTime: string, endTime: string) => {
    const start = parseInt(startTime, 10);
    const end = parseInt(endTime, 10);
    const durationMs = end - start;

    const seconds = Math.floor((durationMs / 1000) % 60);
    const minutes = Math.floor((durationMs / (1000 * 60)) % 60);
    const hours = Math.floor((durationMs / (1000 * 60 * 60)) % 24);
    const days = Math.floor(durationMs / (1000 * 60 * 60 * 24));
    // setTotalTime(TotalTime + durationMs);

    return `${days > 0 ? `${days}d ` : ''}${hours > 0 ? `${hours}h ` : ''}${minutes > 0 ? `${minutes}m ` : ''}${seconds}s`;
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // This will return a readable date and time string
  }

  useEffect(() => {
    const tripDetails = async () => {
      try {
        const res = await fetch("https://api.shubhamiitbhu.in/jspl");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log("Fetched data:", data);
        const vehicleType: any = mapping[slug];
        const filteredData = data.data.filter((item: any) => item.vehicleType === vehicleType);
        console.log("Filtered data:", filteredData);
        setData(filteredData);
        setTotalTrips(filteredData.length);
        filteredData.forEach((item: any) => {
            const dur= calculateDuration(item.startTime, item.endTime);
            setTotalTime(TotalTime + parseInt(dur, 10));
            }
        );

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    tripDetails();
  }, [slug]);

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-4">Vehicle Details</h1>
      <div className="flex justify-between">
        <p className="text-lg font-semibold">Total Trips: {data.length}</p>
        <p className="text-lg font-semibold">Total Time Taken: {TotalTime} Seconds</p>
        </div>
      {isLoading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="flex flex-col gap-4">
          {data.map((item: any, index: number) => (
            <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-md bg-white">
              <p className="text-lg font-semibold">Vehicle ID: {item.vehicleId}</p>
              <p className="text-lg font-semibold">Vehicle Type: {item.vehicleType}</p>
              <p>Total Time Taken: <span className="font-mono">{calculateDuration(item.startTime, item.endTime)}</span></p>
              {/* <p>Start Time: <span className="font-mono">{formatTimestamp(item.startTime)}</span></p>
              <p>End Time: <span className="font-mono">{formatTimestamp(item.endTime)}</span></p> */}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default VehicleDetails;
