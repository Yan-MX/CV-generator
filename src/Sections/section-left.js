import React, { useState } from "react";
import MiddleDefault from "./section-m";
import Right from "./section-right";
import styled from "@emotion/styled";
export default function Left() {
  const [name, setName] = useState("Billy");
  const [number, setNumber] = useState(99304555);
  const [email, setEmail] = useState("billypom.gmail.com");
  const [address, setAddress] = useState("Pomeraniansvei 51");
  const [update, setUpdate] = useState(false);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [major, setMajor] = useState("");
  const [uni, setUni] = useState("");

  const [section, setSection] = useState("0");
  const LeftButton = styled.button`
    border: 1px solid;
    border-radius: 15px;
    font-size: 20px;
    background-color: grey;
    margin-bottom: 0.2rem;
    justify-content: center;
  `;
  const LeftSegment = styled.div`
    border: 0.2px solid grey;
    display: flex;
    flex-direction: column;
    width: 15%;
    border-radius: 10px;
  `;

  return (
    <div className="second">
      <LeftSegment>
        <LeftButton onClick={(e) => setSection("0")}>Templates</LeftButton>

        <LeftButton onClick={(e) => setSection("1")}>Contacts</LeftButton>

        <LeftButton onClick={(e) => setSection("2")}>School</LeftButton>

        <LeftButton onClick={(e) => setSection("3")}>Work</LeftButton>

        <LeftButton onClick={(e) => setSection("4")}>Skills</LeftButton>

        <LeftButton onClick={(e) => setSection("5")}>Project</LeftButton>

        <LeftButton onClick={(e) => setSection("7")}>Others</LeftButton>
      </LeftSegment>
      <MiddleDefault
        index={section}
        name={name}
        email={email}
        number={number}
        address={address}
        setAddress={setAddress}
        setName={setName}
        setEmail={setEmail}
        setNumber={setNumber}
        update={update}
        setUpdate={setUpdate}
        start={start}
        end={end}
        major={major}
        uni={uni}
        setStart={setStart}
        setEnd={setEnd}
        setMajor={setMajor}
        setUni={setUni}
      />
      <Right
        index={section}
        name={name}
        email={email}
        number={number}
        address={address}
        update={update}
        setUpdate={setUpdate}
        start={start}
        end={end}
        major={major}
        uni={uni}
      />
    </div>
  );
}
