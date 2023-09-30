import React, { useState, useEffect } from "react";

// import RatingCard from "../Components/RatingCard";
import Background from "../images/background.jpg";
import Redbus from "../images/red.jpg";
import Newbus from "../images/new.jpg";
import { Link,Navigate, useNavigate } from "react-router-dom";
import buses from "../images/buses.jpg";
import SearchInput from "../Components/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { setFromTo } from "../state/reducers/fromTo";
import moment from "moment";
import { toast } from "react-toastify";
import SearchDays from "../Components/searchdate";
const Home_Page = (props) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [days, setdays] = useState("");
  const [toDate, setToDate] = useState("");
  const [day, setDay] = useState("");
  const data = ["Mumbai", "Pune", "Delhi", "Chennai", "Banglore"];
  const [cities, setCities] = useState(data);
  const [checkFillerror,setchkfillerror]=useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();
  const navigate=useNavigate();

  useEffect(() => {
    setCities(data.filter((val) => val !== from && val !== to));
  }, [from, to]);

  const handleClick = () => {
    if (from === "" || to === "" || days === "") {
      toast.error("Please fill the given fields");
      return;
    } else {
      // props.setAuthentication(true);
      //disptach
      //sendting to local strogae
      localStorage.setItem(
        "Bus",
        JSON.stringify({
          From: from,
          To: to,
          Days: days,
        }
        
        )
      );
      dispatch(
        setFromTo({
          From: from,
          To: to,
          Days: days,
        })
      );
      setchkfillerror(1)
      navigate('/availablebus')
      
    }
   
  };

  const cardDetails = [
    {
      title: "2000+",
      description: "bus collection",
      imageURL: buses,
    },
    {
      title: "20 Million",
      description: "happy customers globally",
      imageURL: "https://image.emojipng.com/645/3039645.jpg",
    },
    {
      title: "5000+",
      description: "tickets book everyday",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqjpYRNuYwypwqkCHVCrpTtRN_ij7b960Tw&usqp=CAU",
    },
  ];
  const ratingsDetails = [
    {
      name: "Vatsal Agrawal",
      year: "2020",
      description: "Amazing travel experience with reserve. Excellent staff",
    },
    {
      name: "Vanya Agrawal",
      year: "2019",
      description: "Amazing service. Always a best time with reserve.",
    },
    {
      name: "Seema Agrawal",
      year: "2018",
      description: "Bus was clean and the journey was smooth. Reached on time.",
    },
  ];

  return (
    <div>
      <div
        className="bg-cover bg-center h-[120vh]"
        style={{ backgroundImage: `url(${Newbus}) ` }}
      >
        <div className="flex-col flex items-center">
          <div className="flex flex-col md:flex-row justify-center items-center pt-[15vh] h-[65vh] rounded-xl ">
            <div className="border-2 pr-3 py-4 rounded-l-xl text-left pl-3 bg-white">
              <SearchInput setVal={setFrom} data={cities} placeholder="From" />
            </div>
            <div className="border-2 pr-3 py-4 text-left pl-3 bg-white">
              <SearchInput setVal={setTo} data={cities} placeholder="To" />
            </div>
            <div className="border-2 pr-3 py-4 pl-3 rounded-r-xl bg-white">
              <SearchDays days={days} setdays={setdays}></SearchDays>
            </div>
          </div>
          <button
            onClick={handleClick}
            className="text-white bg-[Green] mt-6 p-4 text-3xl rounded-xl px-16 "
          >Search 
          </button>
          {checkFillerror===1 &&<Link to="/availablebus"></Link>}
          
        </div>
      </div>
      <div className="font-bold text-center py-10 text-2xl">
        Travel with world's largest bus service
      </div>
      <div className="d-flex justify-content-evenly flex-wrap m-5 md:flex-row md:justify-center">
  <img
    src={Redbus}
    alt="Redbus"
    style={{ maxWidth: "100%", height: "auto", width: "200px", marginBottom: "20px" }}
  />
  <img
    src={Newbus}
    alt="Newbus"
    style={{ maxWidth: "100%", height: "auto", width: "200px", marginBottom: "20px" }}
  />
  <img
    src={buses}
    alt="Buses"
    style={{ maxWidth: "100%", height: "auto", width: "200px", marginBottom: "20px" }}
  />
</div>

      <div className="font-bold text-2xl py-[5vh]">
        Here's what a few of our customers <br /> have to say
      </div>
      <div className="flex items-center flex-col mt-5 mb-16 py-10 w-full md:flex-row md:justify-center bg-slate-200">
        {/* {ratingsDetails.map((ratingsDetail, id) => (
          <RatingCard
            key={id}
            initial={ratingsDetail.name[0]}
            name={ratingsDetail.name}
            since={ratingsDetail.year}
            description={ratingsDetail.description}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Home_Page;
//step-backend connection
  //
