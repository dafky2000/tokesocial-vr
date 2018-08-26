import * as DCL from 'metaverse-api'

// This is an interface, you can use it to enforce the types of your state
export interface IState {
  isDoorClosed: boolean
}

export default class HouseScene extends DCL.ScriptableScene<any, IState> {
  // This is your initial state and it respects the given IState interface
  state = {
    isDoorClosed: false
  }

  sceneDidMount() {
    /* this.eventSubscriber.on('door_click', () => { */
    /*   // setState() will update the state and trigger an update, causing the scene to rerender */
    /*   this.setState({ isDoorClosed: !this.state.isDoorClosed }) */
    /* }) */
  }

  async render() {
    /* const doorRotation = { */
    /*   x: 0, */
    /*   y: this.state.isDoorClosed ? 0 : 90, */
    /*   z: 0 */
    /* } */

    return (
      <scene>
        {/* West Entrance Lounge */}
        <scene position={{ x: 2, y: 0, z: 0 }}>
          <scene position={{ x: 0.35, y: 0, z: 1 }} scale={1}>
            <gltf-model position={{ x: 0, y: 0, z: 0 }} rotation={{ x: 0, y: 90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 1.35, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 0, y: 0, z: 1.85 }} rotation={{ x: 0, y: 90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 1.35, y: 0, z: 2 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
          </scene>

          <scene position={{ x: 0.35, y: 0, z: 5.25 }} scale={1}>
            <gltf-model position={{ x: 0, y: 0, z: 0 }} rotation={{ x: 0, y: 90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 1.35, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 0, y: 0, z: 1.85 }} rotation={{ x: 0, y: 90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 1.35, y: 0, z: 2 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
          </scene>

          <scene position={{ x: 3.3, y: 0, z: 1 }} scale={1}>
            <gltf-model position={{ x: 0, y: 0, z: 0 }} rotation={{ x: 0, y: 90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 1.35, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 0, y: 0, z: 1.85 }} rotation={{ x: 0, y: 90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 1.35, y: 0, z: 2 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
          </scene>

          <scene position={{ x: 3.3, y: 0, z: 5.25 }} scale={1}>
            <gltf-model position={{ x: 0, y: 0, z: 0 }} rotation={{ x: 0, y: 90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 1.35, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 0, y: 0, z: 1.85 }} rotation={{ x: 0, y: 90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 1.35, y: 0, z: 2 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
          </scene>
        </scene>

        {/* East Entrance Lounge */}
        <scene position={{ x: 13, y: 0, z: 0 }}>
          <scene position={{ x: 0.35, y: 0, z: 1 }} scale={1}>
            <gltf-model position={{ x: 0, y: 0, z: 0 }} rotation={{ x: 0, y: 90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 1.35, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 0, y: 0, z: 1.85 }} rotation={{ x: 0, y: 90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 1.35, y: 0, z: 2 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
          </scene>

          <scene position={{ x: 0.35, y: 0, z: 5.25 }} scale={1}>
            <gltf-model position={{ x: 0, y: 0, z: 0 }} rotation={{ x: 0, y: 90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 1.35, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 0, y: 0, z: 1.85 }} rotation={{ x: 0, y: 90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 1.35, y: 0, z: 2 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
          </scene>

          <scene position={{ x: 3.3, y: 0, z: 1 }} scale={1}>
            <gltf-model position={{ x: 0, y: 0, z: 0 }} rotation={{ x: 0, y: 90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 1.35, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 0, y: 0, z: 1.85 }} rotation={{ x: 0, y: 90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 1.35, y: 0, z: 2 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
          </scene>

          <scene position={{ x: 3.3, y: 0, z: 5.25 }} scale={1}>
            <gltf-model position={{ x: 0, y: 0, z: 0 }} rotation={{ x: 0, y: 90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 1.35, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 0, y: 0, z: 1.85 }} rotation={{ x: 0, y: 90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 1.35, y: 0, z: 2 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
          </scene>
        </scene>

        {/* Riverside Lounge */}
        <scene position={{ x: 0, y: 0, z: -10 }}>
          {/* West */}
          <scene position={{ x: 2, y: 0, z: 6.5 }}>
            <gltf-model position={{ x: 0.5, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 1.5, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 2.5, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 3.5, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 4.5, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 5.5, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
          </scene>

          {/* East */}
          <scene position={{ x: 12, y: 0, z: 6.5 }}>
            <gltf-model position={{ x: 0.5, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 1.5, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 2.5, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 3.5, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 4.5, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
            <gltf-model position={{ x: 5.5, y: 0, z: .15 }} rotation={{ x: 0, y: -90, z: 0 }} scale={0.75} src="models/Lounge_Chair_01.gltf" />
          </scene>
        </scene>

        {/* Reverse Riverside Lounge */}
        <scene position={{ x: 0, y: 0, z: -10 }}>
          {/* West */}
          <scene position={{ x: 2, y: 0, z: 4.5 }}>
            <gltf-model position={{ x: 0.5, y: 0, z: .15 }} rotation={{ x: 0, y: 90, z: 0 }} scale={1} src="models/Sun_Bed_01.gltf" />
            <gltf-model position={{ x: 1, y: 0, z: 0.5 }} rotation={{ x: 0, y: 0, z: 0 }} scale={0.75} src="models/Umbrella_Mono_01.gltf" />
            {/* table */}
            <gltf-model position={{ x: 2.5, y: 0, z: .15 }} rotation={{ x: 0, y: 90, z: 0 }} scale={1} src="models/Sun_Bed_01.gltf" />
            <gltf-model position={{ x: 3, y: 0, z: 0.5 }} rotation={{ x: 0, y: 0, z: 0 }} scale={0.75} src="models/Umbrella_Mono_01.gltf" />
            <gltf-model position={{ x: 3.5, y: 0, z: .15 }} rotation={{ x: 0, y: 90, z: 0 }} scale={1} src="models/Sun_Bed_01.gltf" />
            {/* table */}
            <gltf-model position={{ x: 5, y: 0, z: 0.5 }} rotation={{ x: 0, y: 0, z: 0 }} scale={0.75} src="models/Umbrella_Mono_01.gltf" />
            <gltf-model position={{ x: 5.5, y: 0, z: .15 }} rotation={{ x: 0, y: 90, z: 0 }} scale={1} src="models/Sun_Bed_01.gltf" />
          </scene>

          {/* East */}
          <scene position={{ x: 12, y: 0, z: 4.5 }}>
            <gltf-model position={{ x: 0.5, y: 0, z: .15 }} rotation={{ x: 0, y: 90, z: 0 }} scale={1} src="models/Sun_Bed_01.gltf" />
            <gltf-model position={{ x: 1, y: 0, z: 0.5 }} rotation={{ x: 0, y: 0, z: 0 }} scale={0.75} src="models/Umbrella_Mono_01.gltf" />
            {/* table */}
            <gltf-model position={{ x: 2.5, y: 0, z: .15 }} rotation={{ x: 0, y: 90, z: 0 }} scale={1} src="models/Sun_Bed_01.gltf" />
            <gltf-model position={{ x: 3, y: 0, z: 0.5 }} rotation={{ x: 0, y: 0, z: 0 }} scale={0.75} src="models/Umbrella_Mono_01.gltf" />
            <gltf-model position={{ x: 3.5, y: 0, z: .15 }} rotation={{ x: 0, y: 90, z: 0 }} scale={1} src="models/Sun_Bed_01.gltf" />
            {/* table */}
            <gltf-model position={{ x: 5, y: 0, z: 0.5 }} rotation={{ x: 0, y: 0, z: 0 }} scale={0.75} src="models/Umbrella_Mono_01.gltf" />
            <gltf-model position={{ x: 5.5, y: 0, z: .15 }} rotation={{ x: 0, y: 90, z: 0 }} scale={1} src="models/Sun_Bed_01.gltf" />
          </scene>
        </scene>

        {/* Vape Stations */}
        <scene position={{ x: 10, y: 0, z: -20 }}>
          <scene position={{ x: 3, y: 0, z: 3 }}>
            <gltf-model position={{ x: 0, y: 0, z: 0 }} scale={1} src="models/VolVap_6 Seat_POD.gltf" />
            <gltf-model position={{ x: 0, y: 0, z: 4 }} scale={1} src="models/VolVap_6 Seat_POD.gltf" />
            <gltf-model position={{ x: 4, y: 0, z: 0 }} scale={1} src="models/VolVap_6 Seat_POD.gltf" />
            <gltf-model position={{ x: 4, y: 0, z: 4 }} scale={1} src="models/VolVap_6 Seat_POD.gltf" />
          </scene>
        </scene>
      </scene>
    )
  }
}
