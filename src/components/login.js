import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; 
import "./login.css";


const gltfCache = {};

function useLoadGLTF(url) {
  const [gltf, setGltf] = useState(null);

  useEffect(() => {
   
    if (gltfCache[url]) {
      setGltf(gltfCache[url]);
      return;
    }

    const loadGltf = async () => {
      try {
        const gltfData = await loadGLTF(url);
     
        gltfCache[url] = gltfData;
        setGltf(gltfData);
      } catch (error) {
        console.error('Error loading GLTF:', error);
      }
    };

    loadGltf();
  }, [url]);

  return gltf;
}

async function loadGLTF(url) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader(); 
    loader.load(
      url,
      (gltf) => {
        resolve(gltf);
      },
      undefined,
      (error) => {
        reject(error);
      }
    );
  });
}

function RotatingModel(props) {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.y += 0.01; 
  });

  return <primitive ref={mesh} object={props.object} />;
}

function Login3d() {
  const gltf = useLoadGLTF('/desktop.gltf');

  return (
    <div className="App" style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0 }}>
      <Canvas style={{ position: 'absolute', zIndex: 0 }} camera={{ position: [0, 0, 5] }}  alpha>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.9} />
        <directionalLight position={[-2, 5, 3]} intensity={1} />
        <Suspense fallback={null}>
          {gltf && <RotatingModel object={gltf.scene} />}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Login3d;
