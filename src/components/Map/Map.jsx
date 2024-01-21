import React from "react";
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';
import mapStyles from './mapStyles';
const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked, }) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');
    
    return (
       <div className={classes.mapContainer}>
        <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyBD1uWHs1yCWf3kQoaDw2Frb3_BAH8YlLE'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e) => {
            setCoordinates({lat: e.center.lat,lng: e.center.lng});
            setBounds({ ne: e.marginBounds.ne,sw: e.marginBounds.sw});
        }}
        onChildClick={(child) => setChildClicked(child)}
        >
            {places?.map((place, i) => (
                <div
                className={classes.markerContainer}
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                key={i}
                >
                    {
                        !isDesktop ? (
                            <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                        ) : (
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={places.typography} variant="subtitle2" gutterBottom>
                                {place.name}
                                </Typography>
                                <img
                                className={classes.pointer}
                                src={place.photo ? place.photo.images.large.url : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frestaurant&psig=AOvVaw3BL8-H771iZ6E84P1HOYIM&ust=1695901911436000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjYo_3cyoEDFQAAAAAdAAAAABAE'}
                                alt={place.name}
                                />
                                <Rating size="small" value={Number(place.rating)} readOnly />
                            </Paper>
                        )
                    }
                </div>
            ))}
        </GoogleMapReact>
       </div>
    );
}
export default Map;