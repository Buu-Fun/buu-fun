import * as THREE from "three";

export function RectangleRounded(w: number, h: number, r: number, s: number) {
  const pi2 = Math.PI * 2;
  const n = (s + 1) * 4; // Number of contour points
  const indices: number[] = [];
  const positions: number[] = [];
  const uvs: number[] = [];

  // Center vertex
  positions.push(0, 0, 0);
  uvs.push(0.5, 0.5);

  // Generate outer vertices
  for (let j = 0; j < n; j++) {
    contour(j);
  }

  // Generate indices for the triangle fan
  for (let j = 1; j < n; j++) {
    indices.push(0, j, j + 1);
  }
  indices.push(0, n, 1); // Close the fan

  const geometry = new THREE.BufferGeometry();
  geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(indices), 1));
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(positions), 3),
  );
  geometry.setAttribute(
    "uv",
    new THREE.BufferAttribute(new Float32Array(uvs), 2),
  );

  return geometry;

  function contour(j: number) {
    const qu = Math.floor((4 * j) / n) + 1; // Quadrant (1 to 4)
    const sgx = qu === 1 || qu === 4 ? 1 : -1; // Sign for X
    const sgy = qu < 3 ? 1 : -1; // Sign for Y

    const angle = (pi2 * (j - (qu - 1))) / (n - 4);
    const x = sgx * (w / 2 - r) + r * Math.cos(angle);
    const y = sgy * (h / 2 - r) + r * Math.sin(angle);

    positions.push(x, y, 0);
    uvs.push(0.5 + x / w, 0.5 + y / h);
  }
}
