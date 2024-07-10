"use client"
import React, { useEffect, useState } from 'react'
import Header from '../Header';

type Props = {}

const VehicleDetailsFromId = (props: any) => {
  const {slug2}=props.params;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [TotalTrips, setTotalTrips] = useState(0);
  const [TotalTime, setTotalTime] = useState(0);

  const calculateDuration = (startTime: string, endTime: string) => {
    const start = parseInt(startTime, 10);
    const end = parseInt(endTime, 10);
    const durationMs = end - start;

    const seconds = Math.floor((durationMs / 1000) % 60);
    const minutes = Math.floor((durationMs / (1000 * 60)) % 60);
    const hours = Math.floor((durationMs / (1000 * 60 * 60)) % 24);
    const days = Math.floor(durationMs / (1000 * 60 * 60 * 24));
    
    return `${days > 0 ? `${days}d ` : ''}${hours > 0 ? `${hours}h ` : ''}${minutes > 0 ? `${minutes}m ` : ''}${seconds}s`;
  };
  useEffect(() => {
    const tripDetails = async () => {
      try {
        const res = await fetch("https://api.shubhamiitbhu.in/jspl");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data_ = await res.json();
        console.log("Fetched data:", data_.data);
        data_.data.filter((item: any) => item.vehicleId === slug2);
        console.log("Filtered data:", data_);
        setData(data_.data);
        setTotalTrips(data_.data.length);
        data.forEach((item: any) => {
            const dur = calculateDuration(item.startTime, item.endTime);
            setTotalTime(TotalTime + parseInt(dur, 10));
        });

        

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    tripDetails();
  }, [slug2]);
  return (
    <>
    <Header />
      <div className="relative w-full h-screen overflow-x-scroll scroll-smooth mt-24">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover" 
          src="/vid.mp4" 
          autoPlay 
          loop 
          muted 
        />
        <div className="relative flex flex-col gap-4 z-10 p-4 bg-white bg-opacity-70 rounded-lg">
          <h1 className="text-3xl font-bold text-center my-4">Trips Of <b>{slug2}</b></h1>
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Total Trips: {TotalTrips}</h2>
            <h2 className="text-xl font-semibold">Total Time: {TotalTime}</h2>

          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th>Vehicle Id</th>
                <th>Vehicle Type</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {/* {data.map((item: any) => (
                <tr key={item.vehicleId}>
                  <td>{item.vehicleId}</td>
                  <td>{item.vehicleType}</td>
                  <td>{item.startTime}</td>
                  <td>{item.endTime}</td>
                  <td>{calculateDuration(item.startTime, item.endTime)}</td>
                </tr>
              ))} */}
            </tbody>
          </table>
          </div>
          </div>
    </>
    
  )
}

export default VehicleDetailsFromId