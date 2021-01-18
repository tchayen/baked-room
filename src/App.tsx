import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import { Stats, Html, OrbitControls } from "@react-three/drei";
import Scene from "./Scene.js";

function App() {
  return (
    <Canvas concurrent pixelRatio={[1, 2]} camera={{ position: [0, 5, 5] }}>
      <Stats />
      <ambientLight />
      <OrbitControls enableZoom={false} />
      <Suspense
        fallback={
          <Html>
            <div>Loading...</div>
          </Html>
        }
      >
        <Scene />
      </Suspense>
    </Canvas>
  );
}

export default App;
