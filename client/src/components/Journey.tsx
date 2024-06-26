import { useState } from "react";
import { isLoggedIn } from "../utils/auth";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { TflApiResponse, TubeLineStatus } from "./TubeLines";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { NAPTAN_IDS } from "../constants";

interface Option {
  naptanID: string;
  commonName: string;
}

function Journey() {
  const [journeyLines, setJourneyLines] = useState<Array<TflApiResponse>>([]);
  const [from, setFrom] = useState<string>();
  const [to, setTo] = useState<string>();

  async function getJourneyData() {
    try {
      if (from && to) {
        const { data } = await axios.get(
          `https://api.tfl.gov.uk/Journey/JourneyResults/${from}/to/${to}`,
        );
        setJourneyLines(data.lines);
      }
    } catch (error) {
      console.error("Something Went Wrong Please Try Again", error);
    }
  }

  if (!isLoggedIn()) return <Navigate to="/login" />;

  const lineStatusesToDisplay =
    journeyLines &&
    journeyLines
      .filter((line) => line.modeName !== "bus")
      .map((line) => <TubeLineStatus key={line.name} lineInfo={line} />);

  return (
    <>
      <h1>Plan your journey</h1>
      <div className="journey">
        <FromAndToDropdown type="from" value={from} setValue={setFrom} />
        <FromAndToDropdown type="to" value={to} setValue={setTo} />

        <Button
          variant="contained"
          onClick={getJourneyData}
          style={{ width: "40%", margin: "0 auto" }}
        >
          Plan
        </Button>

        {lineStatusesToDisplay?.length > 0 && (
          <div className="journey-lines-container">{lineStatusesToDisplay}</div>
        )}
      </div>
    </>
  );
}

function FromAndToDropdown(props: {
  type: "from" | "to";
  value: string;
  setValue: (v: string) => void;
}) {
  const options: Option[] = NAPTAN_IDS;

  return (
    <FormControl>
      <InputLabel id={`${props.type}-label`}>From</InputLabel>
      <Select
        labelId={`${props.type}-label`}
        id={`${props.type}-select`}
        value={props.value}
        label={props.type[0].toUpperCase() + props.type.slice(1)}
        onChange={(e: SelectChangeEvent) => props.setValue(e.target.value)}
      >
        {options.map((option) => (
          <MenuItem key={option.naptanID} value={option.naptanID}>
            {option.commonName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Journey;
