"use client"
import React, { useEffect, useState } from 'react'
import Classes from "./VehicleCard.module.css"
import Header from '../[slug]/Header'
import Footer from '../[slug]/Footer'
import Link from 'next/link'
type Props = {}
const AllTippers = (props: Props) => {
const [tipperData,setTipperData]=useState([]);
    useEffect(()=>{
        if(localStorage.getItem("tippers")){
            setTipperData(JSON.parse(localStorage.getItem("tippers")||"[]"))
            return;
        }
       try{
        const tippers=async()=>{
            // const res=await fetch("https://api.shubhamiitbhu.in/jspl/tippers",{
            const res=await fetch("https://api.shubhamiitbhu.in/jspl/tippers",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if(!res.ok){
                throw new Error("Failed to fetch data")
            }
            const data=await res.json()
            localStorage.setItem("tippers",JSON.stringify(data.data.data))
            const data_={
                "success": true,
                "data": [
                    {
                        "id": 778851,
                        "display_number": "OD19X7145",
                        "vehicle_movement_status": {
                            "movement_status": "Expired",
                            "status_since_millis": 1720414459,
                            "last_updated": null,
                            "last_online_time": null
                        },
                        "location": {
                            "address": null
                        }
                    },
                    {
                        "id": 778856,
                        "display_number": "OD19X7187",
                        "vehicle_movement_status": {
                            "movement_status": "Moving",
                            "status_since_millis": null,
                            "last_updated": 1720546764,
                            "last_online_time": 1720546768
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 778863,
                        "display_number": "OD19X7181",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": 1720546140.0,
                            "last_updated": 1720546760,
                            "last_online_time": 1720546765
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 778869,
                        "display_number": "OD19X7151",
                        "vehicle_movement_status": {
                            "movement_status": "Moving",
                            "status_since_millis": 1720546500.0,
                            "last_updated": 1720546761,
                            "last_online_time": 1720546765
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 778922,
                        "display_number": "OD19X7116",
                        "vehicle_movement_status": {
                            "movement_status": "Device Offline",
                            "status_since_millis": 1720426139.0,
                            "last_updated": 1720426139,
                            "last_online_time": 1720426142
                        },
                        "location": {
                            "address": {
                                "address": "Golagadia, Odisha, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779375,
                        "display_number": "OD19X7149",
                        "vehicle_movement_status": {
                            "movement_status": "Moving",
                            "status_since_millis": 1720546320.0,
                            "last_updated": 1720546593,
                            "last_online_time": 1720546597
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779379,
                        "display_number": "OD19X7270",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": null,
                            "last_updated": 1720546760,
                            "last_online_time": 1720546763
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779380,
                        "display_number": "OD19X7138",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": null,
                            "last_updated": 1720546765,
                            "last_online_time": 1720546767
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779381,
                        "display_number": "OD19X7163",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": null,
                            "last_updated": 1720538986,
                            "last_online_time": 1720538989
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779384,
                        "display_number": "OD19X7153",
                        "vehicle_movement_status": {
                            "movement_status": "Moving",
                            "status_since_millis": 1720546500.0,
                            "last_updated": 1720546743,
                            "last_online_time": 1720546764
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779388,
                        "display_number": "OD19X7143",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": null,
                            "last_updated": 1720546755,
                            "last_online_time": 1720546759
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779429,
                        "display_number": "OD19X7190",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": null,
                            "last_updated": 1720546768,
                            "last_online_time": 1720546771
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779434,
                        "display_number": "OD19X7189",
                        "vehicle_movement_status": {
                            "movement_status": "Moving",
                            "status_since_millis": null,
                            "last_updated": 1720546764,
                            "last_online_time": 1720546767
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779443,
                        "display_number": "OD19X7197",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": 1720546620.0,
                            "last_updated": 1720546761,
                            "last_online_time": 1720546764
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779447,
                        "display_number": "OD19X7182",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": null,
                            "last_updated": 1720546541,
                            "last_online_time": 1720546550
                        },
                        "location": {
                            "address": {
                                "address": "Angul - Deogarh Rd, Similisahi, Odisha 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779451,
                        "display_number": "OD19X7164",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": 1720545300.0,
                            "last_updated": 1720546752,
                            "last_online_time": 1720546755
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779454,
                        "display_number": "OD19X7108",
                        "vehicle_movement_status": {
                            "movement_status": "Moving",
                            "status_since_millis": null,
                            "last_updated": 1720546763,
                            "last_online_time": 1720546766
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779457,
                        "display_number": "OD19X7158",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": 1720345739.0,
                            "last_updated": 1720546705,
                            "last_online_time": 1720546708
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779459,
                        "display_number": "OD19X7147",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": null,
                            "last_updated": 1720546762,
                            "last_online_time": 1720546765
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779461,
                        "display_number": "OD19X7168",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": null,
                            "last_updated": 1720546766,
                            "last_online_time": 1720546769
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779464,
                        "display_number": "OD19X7127",
                        "vehicle_movement_status": {
                            "movement_status": "Moving",
                            "status_since_millis": null,
                            "last_updated": 1720546765,
                            "last_online_time": 1720546769
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779469,
                        "display_number": "OD19X7132",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": 1720227299.0,
                            "last_updated": 1720546708,
                            "last_online_time": 1720546711
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779723,
                        "display_number": "OD19X7194",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": null,
                            "last_updated": 1720546761,
                            "last_online_time": 1720546764
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779772,
                        "display_number": "OD19X7162",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": 1720546500.0,
                            "last_updated": 1720546769,
                            "last_online_time": 1720546772
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779773,
                        "display_number": "OD19X7165",
                        "vehicle_movement_status": {
                            "movement_status": "Moving",
                            "status_since_millis": null,
                            "last_updated": 1720546762,
                            "last_online_time": 1720546772
                        },
                        "location": {
                            "address": {
                                "address": "Golagadia, Odisha, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779774,
                        "display_number": "OD19X7159",
                        "vehicle_movement_status": {
                            "movement_status": "Moving",
                            "status_since_millis": null,
                            "last_updated": 1720546768,
                            "last_online_time": 1720546771
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779776,
                        "display_number": "OD19X7142",
                        "vehicle_movement_status": {
                            "movement_status": "Moving",
                            "status_since_millis": null,
                            "last_updated": 1720546764,
                            "last_online_time": 1720546767
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779781,
                        "display_number": "OD19X7115",
                        "vehicle_movement_status": {
                            "movement_status": "Moving",
                            "status_since_millis": 1720546620.0,
                            "last_updated": 1720546751,
                            "last_online_time": 1720546765
                        },
                        "location": {
                            "address": {
                                "address": "Golagadia, Odisha, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779784,
                        "display_number": "OD19X7146",
                        "vehicle_movement_status": {
                            "movement_status": "Moving",
                            "status_since_millis": null,
                            "last_updated": 1720546764,
                            "last_online_time": 1720546768
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779786,
                        "display_number": "OD19X7170",
                        "vehicle_movement_status": {
                            "movement_status": "Low Gps Connectivity",
                            "status_since_millis": 1720546218.0,
                            "last_updated": 1720546218,
                            "last_online_time": 1720546764
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 779789,
                        "display_number": "OD19X7112",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": 1720481100.0,
                            "last_updated": 1720546756,
                            "last_online_time": 1720546758
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 780254,
                        "display_number": "OD19X7156",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": null,
                            "last_updated": 1720546764,
                            "last_online_time": 1720546767
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 780259,
                        "display_number": "OD19X7122",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": 1720546020.0,
                            "last_updated": 1720546762,
                            "last_online_time": 1720546766
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 780260,
                        "display_number": "OD19X7188",
                        "vehicle_movement_status": {
                            "movement_status": "Moving",
                            "status_since_millis": null,
                            "last_updated": 1720546760,
                            "last_online_time": 1720546763
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    },
                    {
                        "id": 780264,
                        "display_number": "OD19X7152",
                        "vehicle_movement_status": {
                            "movement_status": "Stopped",
                            "status_since_millis": 1720546140.0,
                            "last_updated": 1720546763,
                            "last_online_time": 1720546766
                        },
                        "location": {
                            "address": {
                                "address": "Northern Division, Odisha, 759130, India",
                                "state": "Odisha",
                                "pincode": "759130",
                                "district": "Northern Division",
                                "country": "India",
                                "source": "DB",
                                "polygon_id": 0,
                                "polygon_ids": []
                            }
                        }
                    }
                ],
                "meta": {
                    "total": 35
                }
            }
            console.log("Fetched data:",data.data.data)
            setTipperData(data.data.data)
            return data;
        }
        tippers();
       }catch(e){console.log(e)}
    },[])
  return (
    <>
    <Header/>
    
{
    tipperData.map((item:any,index:number)=>{
        return(
            
            <div key={index} className="flex flex-row w-full overflow-x-scroll scroll-smooth mt-24">
                 <div className={Classes.vehicleCardContainer}>
      <div className={Classes.flexContainer} style={{backgroundColor:(item?.vehicle_movement_status?.movement_status==="Moving"?"green":"red")}}>
        <div className={Classes.flexContainer}>
          <div className={Classes.tooltip}>
            <a className={Classes.tooltipLink}>
                <Link href={`/vehicles/tippers/${item.display_number}/${item.id}`}>

              <p className={Classes.vehicleId}>{item.display_number}</p>
                </Link>
            
              {item.location.address!==null?
                   (<> 
                   {/* <p className="text-sm">{JSON.stringify(item.location.address)}</p> */}
                     <p className="text-sm">{(item.location.address.address)}</p>
                   </>):(<></>)
              }
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
        )
    })
}
 <Footer/>
    </>
  )
}
export default AllTippers