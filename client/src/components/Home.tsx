import { Paper } from "@mui/material"



const Home = () => {
  return (
    <Paper elevation={3}
      style={{
        alignItems: 'center',
        width: '63vw',
        padding: '2rem',
        textAlign: 'center',
        margin: '30vh auto',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgb(255 255 255 / 90%)'
      }}
    >
      <div className="app-info" style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Make wise decisions when planning your journey.</h2>
        <h4>Optimize your commute with Tube Wise,
          ensuring a smoother and more efficient travel experience.</h4>
      </div>
    </Paper>
  )
}

export default Home