import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { Button, Typography } from "@mui/material";
import Popover from "@mui/material/Popover";
import { CircularProgress } from "@mui/material";

export interface TflApiResponse {
  name: string;
  lineStatuses: Array<{ statusSeverityDescription: string; reason: string }>;
  modified: string;
  modeName: string;
}

export function TubeLineStatus({ lineInfo }: { lineInfo: TflApiResponse }) {
  const [popover, setPopover] = useState<HTMLButtonElement>(null);
  const open = Boolean(popover);
  const id = open ? `popover-${lineInfo.name}` : undefined;

  const lineAbnormalReason = lineInfo.lineStatuses[0].reason;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    lineAbnormalReason && setPopover(event.currentTarget);
  };

  const handleClose = () => {
    setPopover(null);
  };

  return (
    <div key={lineInfo.name}>
      <Button
        variant="text"
        aria-describedby={id}
        onClick={handleClick}
        disabled={!lineAbnormalReason}
        sx={{ color: "#1976d2 !important" }}
      >
        {lineInfo.name}: {lineInfo.lineStatuses[0].statusSeverityDescription}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={popover}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2, color: "rgba(0, 0, 0, 0.87)" }}>
          {lineAbnormalReason}
        </Typography>
      </Popover>
    </div>
  );
}

function Tubelines() {
  const [tubeLinesData, setTubeLinesData] = useState<TflApiResponse[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getTubeData() {
      try {
        const { data } = await axios.get(
          "https://api.tfl.gov.uk/Line/Mode/tube/Status",
        );
        setTubeLinesData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Something Went Wrong Please Try Again", error);
      }
    }
    getTubeData();
  }, []);

  if (!isLoggedIn()) return <Navigate to="/login" />;

  return (
    <div className="lines">
      <h1>Tube Lines</h1>
      <div className="tube-line-container">
        {tubeLinesData &&
          tubeLinesData.map((lineInfo, index) => (
            <TubeLineStatus key={index} lineInfo={lineInfo} />
          ))}
        {isLoading && <CircularProgress />}
      </div>
    </div>
  );
}

export default Tubelines;
