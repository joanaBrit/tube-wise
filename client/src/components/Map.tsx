import { TransformComponent, TransformWrapper, useControls } from "react-zoom-pan-pinch"
import { useState } from "react"

// MUI Icons
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
import ClearIcon from '@mui/icons-material/Clear'



const Map = () => {

  function Controls() {
    const { zoomIn, zoomOut, resetTransform } = useControls()
    const [zoomCount, setzoomCount] = useState(0)
    const maxZoom = 3
    const minZoom = 0

    return (
      <>
        <button onClick={() => { zoomIn(); setzoomCount(zoomCount + 1) }} disabled={zoomCount === maxZoom}><ZoomInIcon /></button>
        <button onClick={() => { zoomOut(); setzoomCount(zoomCount - 1) }} disabled={zoomCount === minZoom}><ZoomOutIcon /></button>
        <button onClick={() => { resetTransform(); setzoomCount(0) }} disabled={zoomCount === minZoom}><ClearIcon /></button>
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