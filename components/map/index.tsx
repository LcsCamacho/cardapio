import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import styles from './style.module.scss'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {},
    revalidate: 60*60
  }
}

export default function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCMYPOn715S3UzCxilxIhAhJI7bbywwg8c'
  })

  const coordinates = { lat: -22.700963, lng: -46.762697 }
  return isLoaded ? (
    <div className={styles.mapComponent}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={coordinates}
        zoom={17}
      >
        <Marker position={coordinates} options={{
          label: {
            text: "Ney Lanches",
            className: styles.markerLabel
          }
        }} />
      </GoogleMap>

    </div>
  ) : null
}