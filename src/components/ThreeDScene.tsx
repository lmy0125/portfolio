// components/ThreeDScene.js
'use client';
import React, { useRef, useState } from 'react';
import { Canvas, ThreeElements, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useGLTF, useTexture, Center, Decal, Text3D, OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { ACESFilmicToneMapping, Mesh } from 'three';

const Model = () => {
	const gltf = useLoader(GLTFLoader, '/path/to/your/model.glb');
	return <primitive object={gltf.scene} />;
};

const Cube = (props: ThreeElements['mesh']) => {
	const meshRef = useRef<Mesh>(null!);
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);

	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.x += 0.01;
			meshRef.current.rotation.y += 0.01;
		}
	});

	return (
		<mesh
			{...props}
			ref={meshRef}
			scale={active ? 1.5 : 1}
			onClick={(event) => setActive(!active)}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}>
			<boxGeometry args={[2, 2, 2]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	);
};

const ThreeDScene = () => {
	return (
		<Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
			<ambientLight />
			<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
			<pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
			<Scene />
			<OrbitControls />
		</Canvas>
	);
};

function Scene({ margin = 0.5 }) {
	const { width, height } = useThree((state) => state.viewport);
	return (
		<>
			<Center bottom right position={[-width / 2 + margin, height / 2 - margin, 0]}>
				<Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
					top left
					<meshStandardMaterial color="white" />
				</Text3D>
			</Center>
			<Center top left position={[width / 2 - margin, -height / 2 + margin, 0]}>
				<Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
					bottom right
					<meshStandardMaterial color="white" />
				</Text3D>
			</Center>
			<Center rotation={[-0.5, -0.25, 0]}>
				<Text3D
					curveSegments={32}
					bevelEnabled
					bevelSize={0.04}
					bevelThickness={0.1}
					height={0.5}
					lineHeight={0.5}
					letterSpacing={-0.06}
					size={1.5}
					font="/Inter_Bold.json">
					{`hello\nworld`}
					<meshNormalMaterial />
				</Text3D>
				{/* <Center position={[-1.25, 0, 0]}>
					<Cup scale={2} />
				</Center> */}
			</Center>
		</>
	);
}

// function Cup(props) {
// 	const { nodes, materials } = useGLTF('/coffee-transformed.glb');
// 	const texture = useTexture('/1200px-Starbucks_Logo_ab_2011.svg.png');
// 	return (
// 		<group {...props} dispose={null}>
// 			<mesh
// 				castShadow
// 				receiveShadow
// 				geometry={nodes.coffee_cup_top_16oz.geometry}
// 				material={materials['13 - Default']}>
// 				<Decal position={[0, 0.75, 0.3]} rotation={[0, 0, 0]} scale={[0.52, 0.6, 0.6]} map={texture} />
// 			</mesh>
// 		</group>
// 	);
// }

export default ThreeDScene;
