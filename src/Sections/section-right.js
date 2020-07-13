import React, { useState, useEffect } from "react";

import styled from "@react-pdf/styled-components";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

export default function Right({
  name,
  number,
  address,
  email,
  update,
  setUpdate,
  start,
  end,
  major,
  uni,
  index,
}) {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 20,
      padding: 10,
      flexGrow: 1,
      textAlign: "center",
    },
  });
  const Head = styled.Text`
    font-size: 24px;
    text-align: center;
  `;

  const [a, setA] = useState("a");
  const [b, setB] = useState("b");
  const [c, setC] = useState("c");
  const [d, setD] = useState("d");
  const [e, setE] = useState("");
  const [f, setF] = useState("");
  const [g, setG] = useState("");
  const [h, setH] = useState("");
  useEffect(() => {
    if (index === "2") {
      setE(start);
      setF(end);
      setG(major);
      setH(uni);
    } else {
      setA(name);
      setB(number);
      setC(email);
      setD(address);
    }
  }, [update]);

  // Create Document Component
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{a}</Text>
          <Text>{b}</Text>
          <Text>{c}</Text>
          <Text>{d}</Text>
          <Text> </Text>
          <Text>{e + "-- " + f}</Text>
          <Text>{g + "-- " + h}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <PDFViewer style={{ width: "50%", height: 800 }}>{MyDocument()}</PDFViewer>
  );
}
