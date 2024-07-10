"use client"
import React, { useEffect, useState } from 'react'
import Header from '../Header';
import Link from 'next/link';

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
  const mapping: any = {
    "tipper": "Tipper",
    "surface_miner": "Surface Miner",
    "excavator": "Excavator",
    "dumper": "Dumper",
    "loader": "Loader",
    "dozer": "Dozer",
    "water_tanker": "Water Tanker",
    "grader": "Grader",
    "surface_drilling": "Surface Drilling",
    "vibratory_compactor": "Vibratory Compactor",
    "welding": "Welding",
    "compressor": "Compressor",
    "ambulance": "Ambulance",
    "pump_diesel": "Pump (Diesel)",
    "washing": "Pump (Diesel) Washing",
    "dg_tower": "DG Tower",
    "dg_main": "DG Main",
    "pump": "Pump",
    "wheel_loader": "Wheel Loader",
    "backhoe_loader": "Backhoe Loader",
    "motor_grader": "Motor Grader",
    "soil_compactor": "Soil Compactor",
    "surfce_drilling": "Surface Drilling",
    "mobile_screen": "MobiScreen EVO",
  };
  useEffect(() => {
    const tripDetails = async () => {
      try {
        const res = await fetch("https://api.shubhamiitbhu.in/jspl/filter",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            vehicleId:slug2
          })
        });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log("Fetched data:", data);
      
       
        setData(data.data);
        setTotalTrips(data.data.length);
        data.data.forEach((item: any) => {
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
          <h1 className="text-3xl font-bold text-center my-4">Details Of {slug2}</h1>
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Total Trips: {data.length}</p>
            <p className="text-lg font-semibold">Total Time Taken: {TotalTime} Seconds</p>
          </div>
          {isLoading ? (
            <p className="text-center text-gray-500 ">Loading...</p>
          ) : (
            <>
              {data.map((item: any, index: number) => (
                <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-md bg-white bg-opacity-80">
                    <h2 className="text-xl font-bold text-blue-500 cursor-pointer">Vehicle ID: {item.vehicleId}</h2>
                  <p className="text-lg font-semibold">Shift: {item.shift}</p>
                  <p className="text-lg font-semibold">Date: {item.date}</p>
                  <p className="text-lg font-semibold">Vehicle Type: {item.vehicleType}</p>
                  <p>Total Time Taken: <span className="font-mono">{calculateDuration(item.startTime, item.endTime)}</span></p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
    
  )
}

export default VehicleDetailsFromId