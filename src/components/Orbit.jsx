import { useMemo } from "react";
import * as THREE from "three";

export default function Orbit({ radius, opacity = 0.3, color = "#ffffff" }) {
  const points = useMemo(() => {
    const curve = new THREE.EllipseCurve(
      0, 0,
      radius, radius,
      0, 2 * Math.PI,
      false,
      0
    );
    const points = curve.getPoints(64);
    return points.map(point => new THREE.Vector3(point.x, 0, point.y));
  }, [radius]);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color={color} transparent opacity={opacity} />
    </line>
  );
}