import { useTexture } from "@react-three/drei"

export default function Background () {
    const colorMap = useTexture('/wife/room-background.jpg')

    return (
        <mesh position={[0, 1, -1]}>
            <planeGeometry args={[3, 3]}/>
            <meshStandardMaterial map={colorMap} />
        </mesh>
    )
}
