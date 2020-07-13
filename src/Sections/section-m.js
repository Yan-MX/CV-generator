import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
export default function MiddleDefault({
  index,
  name,
  number,
  email,
  address,
  setName,
  setNumber,
  setAddress,
  setEmail,
  update,
  setUpdate,
  start,
  end,
  major,
  uni,
  setStart,
  setEnd,
  setMajor,
  setUni,
}) {
  const Ul = styled.ul`
    list-style: none;
    justify-content: left;
    padding-inline-start: 3rem;
    font-size: 20px;
    width: 5 rem;
  `;
  const MiddleSegment = styled.div`
    border: 0.2px solid grey;
    width: 30%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  `;
  const [x, setX] = useState(false);
  useEffect(() => {
    update ? setUpdate(false) : setUpdate(true);
  }, [x]);
  const inputCity = useRef(null);
  useEffect(() => {
    if ((inputCity === null) | (inputCity.current === null)) {
      console.log("null");
    } else {
      inputCity.current.focus();
    }
  }, [name]);
  const inputCity2 = useRef(null);
  useEffect(() => {
    if ((inputCity2 === null) | (inputCity2.current === null)) {
      console.log("null");
    } else {
      inputCity2.current.focus();
    }
  }, [number]);
  const inputCity3 = useRef(null);
  useEffect(() => {
    if ((inputCity3 === null) | (inputCity3.current === null)) {
      console.log("null");
    } else {
      inputCity3.current.focus();
    }
  }, [email]);
  const inputCity4 = useRef(null);
  useEffect(() => {
    if ((inputCity4 === null) | (inputCity4.current === null)) {
      console.log("null");
    } else {
      inputCity4.current.focus();
    }
  }, [address]);
  const inputCity5 = useRef(null);
  useEffect(() => {
    if ((inputCity5 === null) | (inputCity5.current === null)) {
      console.log("null");
    } else {
      inputCity5.current.focus();
    }
  }, [start]);
  const inputCity6 = useRef(null);
  useEffect(() => {
    if ((inputCity6 === null) | (inputCity6.current === null)) {
      console.log("null");
    } else {
      inputCity6.current.focus();
    }
  }, [end]);
  const inputCity7 = useRef(null);
  useEffect(() => {
    if ((inputCity7 === null) | (inputCity7.current === null)) {
      console.log("null");
    } else {
      inputCity7.current.focus();
    }
  }, [major]);
  const inputCity8 = useRef(null);
  useEffect(() => {
    if ((inputCity8 === null) | (inputCity8.current === null)) {
      console.log("null");
    } else {
      inputCity8.current.focus();
    }
  }, [uni]);
  var card = "";
  switch (index) {
    case "2":
      card = school();
      break;
    case "3":
      card = work();
      break;
    case "4":
      card = skill();
      break;
    case "5":
      card = project();
      break;
    default:
      card = contact();
      break;
  }

  function contact() {
    return (
      <div>
        <li>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            ref={inputCity}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="number">Number</label>
          <input
            ref={inputCity2}
            type="text"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <input
            ref={inputCity3}
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="address">Address</label>
          <input
            ref={inputCity4}
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </li>
      </div>
    );
  }
  function school() {
    return (
      <div>
        <li>
          <label htmlFor="start time">Start time</label>
          <input
            ref={inputCity5}
            type="text"
            id="start time"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="end time">End time</label>
          <input
            ref={inputCity6}
            type="text"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            id="end time"
          />
        </li>
        <li>
          <label htmlFor="major">Major</label>
          <input
            type="text"
            id="major"
            ref={inputCity7}
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="university">University</label>
          <input
            type="text"
            id="university"
            ref={inputCity8}
            value={uni}
            onChange={(e) => setUni(e.target.value)}
          />
        </li>
      </div>
    );
  }
  function skill() {
    return (
      <div>
        <li>
          <label htmlFor="skill name">Skill name</label>
          <input type="text" id="skill name" />
        </li>
        <li>
          <label htmlFor="skill level">Skill level</label>
          <input type="text" id="skill level" />
        </li>
        <li>
          <label htmlFor="skill details">Skill details</label>
          <input type="text" id="skill details" />
        </li>
      </div>
    );
  }
  function project() {
    return (
      <div>
        <li>
          <label htmlFor="project name">Project name</label>
          <input type="text" id="project name" />
        </li>
        <li>
          <label htmlFor="project link">Project link</label>
          <input type="text" id="project link" />
        </li>
        <li>
          <label htmlFor="project details">Project details</label>
          <input type="text" id="project details" />
        </li>
      </div>
    );
  }
  function work() {
    return (
      <div>
        <li>
          <label htmlFor="start time">Start time</label>
          <input type="text" id="start time" />
        </li>
        <li>
          <label htmlFor="end time">End time</label>
          <input type="text" id="end time" />
        </li>
        <li>
          <label htmlFor="job title">Job title</label>
          <input type="text" id="job title" />
        </li>
        <li>
          <label htmlFor="company name">Company name</label>
          <input type="text" id="company name" />
        </li>
        <li>
          <label htmlFor="job responsiblities">Job responsiblities</label>
          <input type="text" id="job responsiblities" />
        </li>
        <li>
          <label htmlFor="job location">Job location</label>
          <input type="text" id="job location" />
        </li>
      </div>
    );
  }
  function testClick() {
    x ? setX(false) : setX(true);
    console.log("button clicks");
  }

  return (
    <MiddleSegment>
      <form className="form">
        <Ul>{card}</Ul>
      </form>
      <button onClick={testClick}>Save and Update</button>
    </MiddleSegment>
  );
}
