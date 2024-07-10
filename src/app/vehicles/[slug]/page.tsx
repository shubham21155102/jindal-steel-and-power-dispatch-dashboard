"use client";
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';

type Props = {}

const VehicleDetails = (props: any) => {
  const { slug } = props.params;
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalTrips, setTotalTrips] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [selectedShift, setSelectedShift] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

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

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const shiftWiseFiltering = (shift: string) => {
    const filtered = data.filter((item: any) => item.shift === shift);
    setTotalTrips(filtered.length);
    setFilteredData(filtered);
    let totalTimeSum = 0;
    filtered.forEach((item: any) => {
      const duration = calculateDuration(item.startTime, item.endTime);
      totalTimeSum += parseDuration(duration);
    });
    setTotalTime(totalTimeSum);
  };

  const dateWiseFiltering = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    console.log(formattedDate);
  
    const filtered = data.filter((item: any) => {
      const itemDateFormatted = new Date(item.date).toLocaleDateString('en-US', options);
      return itemDateFormatted === formattedDate;
    });
    setTotalTrips(filtered.length);
    setFilteredData(filtered);
    let totalTimeSum = 0;
    filtered.forEach((item: any) => {
      const duration = calculateDuration(item.startTime, item.endTime);
      totalTimeSum += parseDuration(duration);
    });
    setTotalTime(totalTimeSum);
  
    setFilteredData(filtered);
  };

  const combinedFiltering = () => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', options) : '';

    const filtered = data.filter((item: any) => {
      const itemDateFormatted = new Date(item.date).toLocaleDateString('en-US', options);
      const matchesShift = selectedShift ? item.shift === selectedShift : true;
      const matchesDate = formattedDate ? itemDateFormatted === formattedDate : true;
      return matchesShift && matchesDate;
    });
    setTotalTrips(filtered.length);
    setFilteredData(filtered);
    let totalTimeSum = 0;
    filtered.forEach((item: any) => {
      const duration = calculateDuration(item.startTime, item.endTime);
      totalTimeSum += parseDuration(duration);
    });
    setTotalTime(totalTimeSum);

    setFilteredData(filtered);
  };
  const changeDateFormatToDate=(date:string)=>{
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    console.log(formattedDate);
    return changeDateFormatToDate;
  }
  useEffect(() => {
    const tripDetails = async () => {
      try {
        const res = await fetch("https://api.shubhamiitbhu.in/jspl/filter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            vehicleType: mapping[slug]
          })
        });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log("Fetched data:", data);
        // data.data.map((x)=>{
        //   x.datee=changeDateFormatToDate(x.date)
        // })
        // const formattedData = data.data.map((item: any) => {
        //   return {
        //     ...item,
        //     datee: changeDateFormatToDate(item.date)
        //   };
        // }
        // );
        setData(data.data);
        setFilteredData(data.data);
        setTotalTrips(data.data.length);
        let totalTimeSum = 0;
        data.data.forEach((item: any) => {
          const duration = calculateDuration(item.startTime, item.endTime);
          totalTimeSum += parseDuration(duration);
        });
        setTotalTime(totalTimeSum);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    tripDetails();
  }, [slug]);

  const parseDuration = (duration: string) => {
    const regex = /(\d+d )?(\d+h )?(\d+m )?(\d+s)/;
    const matches = regex.exec(duration);
    let totalSeconds = 0;

    if (matches) {
      if (matches[1]) totalSeconds += parseInt(matches[1]) * 86400;
      if (matches[2]) totalSeconds += parseInt(matches[2]) * 3600;
      if (matches[3]) totalSeconds += parseInt(matches[3]) * 60;
      if (matches[4]) totalSeconds += parseInt(matches[4]);
    }

    return totalSeconds;
  };


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
          <h1 className="text-3xl font-bold text-center my-4">Vehicle Details</h1>
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Total Trips: {totalTrips}</p>
            <p className="text-lg font-semibold">Total Time Taken: {totalTime} Seconds</p>
          </div>

          <div className="flex gap-4">
            <select
              value={selectedShift}
              onChange={(e) => setSelectedShift(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Shift</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="General">General</option>
            </select>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={combinedFiltering}
              className="p-2 bg-blue-500 text-white rounded-md"
            >
              Filter
            </button>
          </div>

          {isLoading ? (
            <p className="text-center text-gray-500 ">Loading...</p>
          ) : (
            <>
              {filteredData.map((item: any, index: number) => (
                <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-md bg-white bg-opacity-80">
                  <Link href={`/vehicles/${slug}/${item.vehicleId}`}>
                    <h2 className="text-xl font-bold text-blue-500 cursor-pointer">Vehicle ID: {item.vehicleId}</h2>
                  </Link>
                  <p className="text-lg font-semibold cursor-pointer" onClick={() => shiftWiseFiltering(item.shift)}>Shift: {item.shift}</p>
                  <p className="text-lg font-semibold" onClick={() => dateWiseFiltering(item.date)}>Date: {item.date}</p>
                  <p className="text-lg font-semibold">Vehicle Type: {item.vehicleType}</p>
                  <p>Total Time Taken: <span className="font-mono">{calculateDuration(item.startTime, item.endTime)}</span></p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VehicleDetails;