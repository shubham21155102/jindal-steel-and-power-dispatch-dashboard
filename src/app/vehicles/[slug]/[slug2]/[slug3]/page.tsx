"use client";
import React, { useEffect, useState } from 'react';
import Classes from "../[slug3]/../../../tippers/VehicleCard.module.css"
import Header from '../../Header';
import Footer from '../../Footer';
import Link from 'next/link';

type Props = {
  params: {
    slug2: string;
    slug3: string;
  };
};

const VehiclesTrips: React.FC<Props> = (props) => {
  const { slug2, slug3 } = props.params;
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.shubhamiitbhu.in/jspl/tippers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "vehicleId": slug3
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data_ = await res.json();
        console.log("Fetched data:", data_);
        setData(data_.data.data);
        console.log("Filtered data:", data_.data.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [slug3]);

  return (
   <>
     <>
    <Header/>
    {/* {(data?.vehicle_movement_status?.movement_status)?(<></>):(<></>)} */}
  
            <div className="flex flex-row w-full overflow-x-scroll scroll-smooth mt-24" >
                 <div className={Classes.vehicleCardContainer}>
      <div className={Classes.flexContainer} style={{backgroundColor:(data?.vehicle_movement_status?.movement_status==="Moving"?"green":"red")}}>
        <div className={Classes.flexContainer}>
          <div className={Classes.tooltip}>
            <a className={Classes.tooltipLink}>
               

              <p className={Classes.vehicleId}>Vehicle Number: {slug2}</p>
                
            
            
               
                     <p className="text-sm">Latitude: {(data?.location?.lat)}</p>
                      <p className="text-sm">Longitude: {(data?.location?.long)}</p>
                      <p className="text-sm">Status: {(data?.vehicle_movement_status?.movement_status)}</p>

            
            </a>
          </div>
        </div>
        <div className={Classes.flexContainer}>
          <div className={Classes.flexContainer}>
            <div className={Classes.tooltip} data-tip="Share">
              <button className={Classes.button}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.159 5.664L6.647 9.01m5.695 5.511l-5.865-3.422" stroke="#546988" strokeWidth="1.253"></path>
                  <circle cx="13.684" cy="15.306" r="2.088" stroke="#546988" strokeWidth="1.253"></circle>
                  <circle cx="13.684" cy="4.736" r="2.088" stroke="#546988" strokeWidth="1.253"></circle>
                  <circle cx="4.686" cy="10.021" r="2.088" stroke="#546988" strokeWidth="1.253"></circle>
                </svg>
              </button>
            </div>
            <div className={Classes.tooltip} data-tip="Driver">
              <button className={Classes.button}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.987 13.621c-3.223 0-5.975.487-5.975 2.439s2.735 2.456 5.975 2.456c3.223 0 5.975-.488 5.975-2.439 0-1.95-2.734-2.456-5.975-2.456z" stroke="#546988" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M13.817 7.008a3.83 3.83 0 01-3.83 3.83H9.96a3.817 3.817 0 01-3.803-3.83" stroke="#546988" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                  <ellipse cx="4.771" cy="2.955" rx="4.771" ry="2.955" transform="matrix(1 0 0 -1 5.216 7.922)" stroke="#546988" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></ellipse>
                </svg>
              </button>
            </div>
            <div className={Classes.tooltip} data-tip="Create Trip">
              <button className={Classes.button}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 5h4.167C12.917 5 15 5 15 7.5S12.917 10 11.667 10h-3.75C6.667 10 5 10.417 5 12.5S6.667 15 7.917 15H15" stroke="#546988" strokeWidth="1.248" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12.5 17.5L15 15l-2.5-2.5" stroke="#546988" strokeWidth="1.248" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M5.833 7.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="#546988"></path>
                </svg>
              </button>
            </div>
            <div className={Classes.tooltip} data-tip="Vehicle State">
              <button className={Classes.button}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 8.75v7.5M14.5 8.75v7.5M4 12.5h2M14 12.5h2" stroke="#546988" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M15 5.5H5a1.5 1.5 0 00-1.5 1.5v6A1.5 1.5 0 005 14.5h10a1.5 1.5 0 001.5-1.5v-6A1.5 1.5 0 0015 5.5z" stroke="#546988" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M4.75 7.5h10.5M6.25 6.5h7.5" stroke="#546988" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
        
   

 <Footer/>
    </></>
  );
};

export default VehiclesTrips;