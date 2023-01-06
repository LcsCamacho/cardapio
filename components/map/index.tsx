import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api'
import styles from './style.module.scss'

export default function Maps() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCMYPOn715S3UzCxilxIhAhJI7bbywwg8c"
      })

      const position = {lat:-22.700963,lng:-46.762697}
    return isLoaded ? (
        <div className={styles.mapContainer}>
        <GoogleMap
          mapContainerStyle={{width:'100%', height: '100%'}}
          center={position}
          zoom={18}

        >
          <Marker position={position} options={{label:{
            text:"Ney Lanches", 
            className:"mapMarker" 
            }}}/>
        </GoogleMap>

        </div>
    ) : <></>
}