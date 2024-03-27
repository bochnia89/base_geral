var panorama, viewer, container;

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg' );

viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama );

// Camera Controls

// How far you can orbit vertically, upper and lower limits.Range is 0 to Math.PI radians.
viewer.OrbitControls.minPolarAngle = Math.PI / 3;
viewer.OrbitControls.maxPolarAngle = Math.PI * 2 / 3;

// How far you can orbit horizontally, upper and lower limits. If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
viewer.OrbitControls.minAzimuthAngle = - Math.PI / 3;
viewer.OrbitControls.maxAzimuthAngle = Math.PI / 3;

// Momentum 
viewer.OrbitControls.momentumDampingFactor = 0.75;
viewer.OrbitControls.momentumScalingFactor = -0.01;
viewer.OrbitControls.momentumKeydownFactor = 10;

// Fov
viewer.OrbitControls.minFov = 50;
viewer.OrbitControls.maxFov = 160;

// Zoom
viewer.OrbitControls.noZoom = true;
