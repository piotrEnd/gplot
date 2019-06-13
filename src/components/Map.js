import React from 'react';

import { GoogleMap, withScriptjs, withGoogleMap, Marker, Polyline } from 'react-google-maps';

const polylineCoord = [
	{ lat: 52.361858, lng: 16.853634 },
	{ lat: 52.361282, lng: 16.854667 },
	{ lat: 52.362132, lng: 16.855571 },
	{ lat: 52.362658, lng: 16.854333 },
	{ lat: 52.361858, lng: 16.853634 }
];

function mapData() {
	return (
		<GoogleMap defaultZoom={16} defaultCenter={{ lat: 52.361832, lng: 16.85428 }}>
			<Marker position={{ lat: 52.361551, lng: 16.854548 }} title="35/17" />
			<Polyline path={polylineCoord} />
		</GoogleMap>
	);
}

const Map = withScriptjs(withGoogleMap(mapData));
export default Map;
