import React from 'react';
import * as THREE from 'three';
import OrbitControls from 'threejs-orbit-controls';
import { Lighting } from '../scene/Elements';


import { 
    createSimpleCube,
    // createGround,
    // createAllBars,
    // createTargetCap,
} from '../scene/Geometry';

class Scene extends React.Component {

    componentDidMount() {
        this.initScene();
    }
    componentWillUnmount() {
    }

    initScene = () => {

        

        const {height, width, showHelpers} = this.props;

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
        this.renderer = new THREE.WebGLRenderer();
      //  this.renderer.shadowMapEnabled = true;
      //  this.renderer.shadowMapSoft = true;

        this.renderer.setSize( width, height );

        this.mount.appendChild( this.renderer.domElement );

        camera.position.set( 0, 0, 300 );
        camera.lookAt(scene.position);

        const controls = new OrbitControls(camera);
        controls.enabled = true;
        controls.maxDistance = 5000;
        controls.minDistance = 0;
        controls.update();

        
        const light = new THREE.AmbientLight( 0x595959 ); // soft white light

        console.log(light)
        scene.add( light );
      const lightsObject = Lighting ({scene});
      scene.add ( lightsObject.sceneLights );
        
    //    const cameraHelper = new THREE.CameraHelper( camera );

    //     if(showHelpers){
    //         scene.add ( cameraHelper );
    //         scene.add ( lightsObject.sceneHelpers );
    //     }

        const simpleCube =createSimpleCube()
        scene.add( simpleCube );

      


        /*
        scene.add( createGround() );
        scene.add( createAllBars() );
        scene.add( createTargetCap() );
        */

        const animate = () =>{
            requestAnimationFrame( animate );

             simpleCube.rotation.z -= 0.01;
            //simpleCube.rotation.y -= 0.005;
            
            this.renderer.render( scene, camera );
        }
        //renderer.render( scene, camera );

        animate();

    }

    resetScene = () => {
        this.mount.removeChild( this.renderer.domElement );
        this.initScene();
    }

    render() {

        const renderScene = <div ref={ref => (this.mount = ref)} /> 
        
        return (
            <div style={{backgroundColor:"#282c34"}}>
                {renderScene}
                <div style={{margin: 10 }}>
                    <button 
                        onClick={this.resetScene} 
                        style={{fontSize:14}}
                    >Initialize Scene with Current Settings</button>
                </div>
            </div>
        );
    }

}

export default Scene;
