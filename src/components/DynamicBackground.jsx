import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

const DynamicBackground = () => {
  const canvasRef = useRef(null);
  const glRef = useRef(null);
  const timeRef = useRef(0);

  const [springs] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  }));

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');
    if (!gl) return;

    glRef.current = gl;

    // Create shader program
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertexShader, `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `);

    gl.shaderSource(fragmentShader, `
      precision highp float;
      uniform float time;
      varying vec2 vUv;
      
      // Magenta color
      vec3 magenta = vec3(1.0, 0.0, 1.0);
      // Dark blue color
      vec3 darkBlue = vec3(0.0, 0.0, 0.2);
      
      void main() {
        // Create multiple waves with different frequencies
        float wave1 = sin(vUv.x * 10.0 + time) * 0.5 + 0.5;
        float wave2 = sin(vUv.y * 8.0 + time * 0.7) * 0.5 + 0.5;
        float wave3 = sin((vUv.x + vUv.y) * 12.0 + time * 1.2) * 0.5 + 0.5;
        
        // Combine waves with different weights
        float combinedWave = wave1 * 0.4 + wave2 * 0.3 + wave3 * 0.3;
        
        // Create smooth gradient between magenta and dark blue
        vec3 color = mix(darkBlue, magenta, combinedWave);
        
        // Add some variation to the alpha for a more ethereal effect
        float alpha = 0.5 + 0.3 * sin(time * 0.5);
        
        gl_FragColor = vec4(color, alpha);
      }
    `);

    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    // Create buffer
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1
    ]), gl.STATIC_DRAW);

    // Get attribute location
    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Get uniform location
    const timeLocation = gl.getUniformLocation(program, 'time');

    const handleResize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const animate = () => {
      timeRef.current += 0.01;
      gl.useProgram(program);
      gl.uniform1f(timeLocation, timeRef.current);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <animated.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        ...springs,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
      />
    </animated.div>
  );
};

export default DynamicBackground; 