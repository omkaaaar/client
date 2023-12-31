import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'
import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  return (

    // it will contain everything
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset='city' />


      {/* the below part contains shirt effects  */}
      <CameraRig>
        {/* <Backdrop/> */}
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default Canvas