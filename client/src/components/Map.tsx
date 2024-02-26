import { TransformComponent, TransformWrapper, useControls } from "react-zoom-pan-pinch"
import { useState } from "react"

// MUI Icons
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
import ClearIcon from '@mui/icons-material/Clear'

const Map = () => {

  function Controls() {
    const { zoomIn, zoomOut, resetTransform } = useControls()
    const [zoomInCount, setzoomInCount] = useState(0)
    const maxZoom = 5

    return (
      <>
        <button onClick={() => zoomIn()} disabled={zoomInCount === maxZoom}><ZoomInIcon/></button>
        <button onClick={() => zoomOut()}><ZoomOutIcon/></button>
        <button onClick={() => resetTransform()}><ClearIcon/></button>
      </>
    )
  }

  return (
    <>
      <div className="map">
        <h1>Map</h1>
        <h3>Tube Lines</h3>
      </div>
      <TransformWrapper>
        <Controls />
        <TransformComponent>
          <img
            src='/assets/tubeMap2024.png'
            alt='Tube lines map'
            width='90%'
          />
        </TransformComponent>
      </TransformWrapper>
    </>
  )
}

export default Map