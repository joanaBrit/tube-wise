import Paper from "@mui/material/Paper";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Paper
        elevation={3}
        style={{
          display: "flex",
          alignItems: "center",
          width: "63vw",
          padding: "2rem",
          textAlign: "center",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "rgb(255 255 255 / 90%)",
        }}
      >
        <h2>Make wise decisions when planning your journey.</h2>
        <h4>
          Optimize your commute with Tube Wise, ensuring a smoother and more
          efficient travel experience.
        </h4>
      </Paper>
    </div>
  );
};

export default Home;
