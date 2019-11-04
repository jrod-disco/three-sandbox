// ** --------------------------------------------------

// ** Begins THREE.JS  Game Elements & Geometry --------

import * as THREE from 'three';

const useShadows = true;

const BAR_COLS = 3;
const BAR_ROWS = 3;
const BAR_SIZE = 10;
const BAR_LENGTH = 75;
const BAR_INITIAL_Z = BAR_LENGTH*-0.45;
//const BAR_DOWN_Z = BAR_LENGTH*-1.25;
const BAR_OFFSET = BAR_SIZE*1.25;

const COLOR_SETS = [

    {
        label: 'Roy (3)',
        set: [0xC22121, 0xF57336, 0xFFB733],
        hex: ['#C22121', '#F57336', '#FFB733'],
    },
    {
        label: '\'merica (3)',
        set: [0xA60728, 0xEFEDF1, 0x2D4B74],
        hex: ['#A60728','#EFEDF1','#2D4B74'],
    },
    {
        label: 'Sakura Simple (3)',
        set: [0x541F1F, 0xFF5FA8, 0xFDDFED],
        hex: ['#541F1F','#FF5FA8','#FDDFED'],
    },
    {
        label: 'Classic Caixa (4)',
        set: [0xCB0000, 0x004068, 0x139E16, 0xFFCB00],
        hex: ['#CB0000', '#004068', '#139E16', '#FFCB00'], 
    },
    {
        label: 'Aztectic (4)',
        set: [0xD91A1A, 0x384039, 0x03A696, 0xF2BE22],
        hex: ['#D91A1A', '#384039', '#03A696', '#F2BE22'],
    },
    {
        label: 'Vincent\'s Room (4)',
        set: [0x99BDDC, 0xCE9801, 0xACB65D, 0x912600],
        hex: ['#99BDDC', '#CE9801', '#ACB65D', '#912600'],
    },
    {
        label: 'Earthmother (4)',
        set: [0x88A825, 0x35203B, 0x911146, 0xED8C2B],
        hex: ['#88A825', '#35203B', '#911146', '#ED8C2B'],
    }, 
    {
        label: 'Patrick\'s Navel (4)',
        set: [0xFEFEFE, 0x654C6C, 0xB18A69, 0x701D39],
        hex: ['#FEFEFE', '#654C6C', '#B18A69', '#701D39'],
    },
    {
        label: 'Witchy Woman (4)',
        set: [0x8B20C1, 0xE4ADFF, 0xD9FF57, 0x90B31B ],
        hex: ['#8B20C1', '#E4ADFF', '#D9FF57', '#90B31B' ],
    }, 
    {
        label: 'Rigden (5)',
        set: [0xFFC229, 0xA5C2BA, 0x4E8591, 0xA81714, 0xDC6A5F],
        hex: ['#FFC229', '#A5C2BA', '#4E8591', '#A81714', '#DC6A5F'],
    }, 
    {
        label: 'Valley Girl (5)',
        set: [0xBFEE10, 0x9F13DF, 0xF09D00, 0x06B9EE, 0xEC0CAA],
        hex: ['#BFEE10', '#9F13DF', '#F09D00', '#06B9EE', '#EC0CAA'],
    }, 
    {
        label: 'Bella Vita (5)',
        set: [0x7F1637, 0x037777, 0xFFB732, 0xF47236, 0xC12121],
        hex: ['#7F1637', '#037777', '#FFB732', '#F47236', '#C12121'],
    }, 
    {
        label: 'Gogh Nuts (6)',
        set: [0x123F77, 0x0F86B6, 0x37CAE5, 0xF5DB37, 0xFBEFCB, 0xA3945D],
        hex: ['#123F77', '#0F86B6', '#37CAE5', '#F5DB37', '#FBEFCB', '#A3945D'],
    },
    {
        label: 'Six Shades of Nope (6)',
        set: [0xF0F0F1, 0xD4D4D6, 0xB8B8BC, 0x8B8B8F, 0x525254, 0x1F1F1F],
        hex: ['#F0F0F1', '#D4D4D6', '#B8B8BC','#8B8B8F', '#525254', '#1F1F1F'],
    },
]

// 3x3 Group of Bars
// Each bar is composed of a stem, a cap, and some other decorative meshes
export const createAllBars = () => {

    
    
    const gAllBars = new THREE.Group();
  
    let barID = 0;
    
    for (let i = 0; i < BAR_ROWS; i++)
    {
        for (let j = 0; j < BAR_COLS; j++)
        {
            barID++
          
            const newBarAll = createBar(barID);
            const newBar = newBarAll.bar;
            newBar.position.set((i*BAR_OFFSET),-(j*BAR_OFFSET),0)
            
            gAllBars.add(newBar);
            //allCapsArray.push(newBarAll.barCap); // used for checking matches a
            
        }
    }
  
    //allCapsArrayRef.current = [...allCapsArray];
  
    gAllBars.position.set(0,7,0)
    gAllBars.rotation.z = -45 * Math.PI / 180;
    gAllBars.rotation.x = -35 * Math.PI / 180;
    
    //winMatches = allCapsArray.length;
   // allBars = gAllBars;
  
    return gAllBars
  
}
  
  // An individual bar and its meshes (cap, stem, etc.)
  // Called and returned to createAllBars
export const createBar = (barID) => {

    const randoDando = () => Math.random();
  
    // The Stem / Piston
    const barStem = new THREE.Group();
    const barCore = new THREE.Mesh( 
        new THREE.BoxGeometry( BAR_SIZE, BAR_SIZE, BAR_LENGTH-(BAR_SIZE*0.35) ), 
        new THREE.MeshPhongMaterial( { 
            color: 0xDDDDDD,
            shininess: 20,
            specular: 0xFFFFFF,
        } ) 
    );
    barCore.castShadow = useShadows;
    barCore.receiveShadow = useShadows;
  
    const barTipLight = new THREE.Mesh( 
    new THREE.BoxGeometry( BAR_SIZE, BAR_SIZE, BAR_SIZE*0.18 ), 
    new THREE.MeshPhongMaterial( { 
        color: 0xDDDDDD,
        shininess: 50,
        specular: 0xFFFFFF,
        emissive: 0xFFFFFF,
        emissiveIntensity: 0.5,
    } ) 
    );
    barTipLight.position.z = BAR_LENGTH*0.5 - BAR_SIZE*0.1
  
    const barTipDark = new THREE.Mesh( 
    new THREE.BoxGeometry( BAR_SIZE, BAR_SIZE, BAR_SIZE*0.18 ), 
    new THREE.MeshPhongMaterial( { 
        color: 0x000000,
        shininess: 50,
        specular: 0xFFFFFF,
        emissiveIntensity: 0.5,
    } ) 
    );
    barTipDark.position.z = BAR_LENGTH*0.5 + BAR_SIZE*0.05
  
    // The Color Cap ----
    const colorSet = COLOR_SETS[3].hex //Settings.getColorSet();
    const MAX_COLOR = colorSet.length;
    const capColorIndex = Math.floor(randoDando() * MAX_COLOR)
    const capColor = colorSet[capColorIndex];

    const barCap = new THREE.Mesh( 
    new THREE.BoxGeometry( BAR_SIZE, BAR_SIZE, BAR_SIZE*0.3 ), 
    new THREE.MeshPhongMaterial( { 
        color: capColor,
        specular: capColor,
        shininess: 50,
        emissive: 0x000000,
        emissiveIntensity: 1.5,
    } ) 
    );

    const barCapGlow = new THREE.Mesh( 
        new THREE.BoxGeometry( BAR_SIZE*1.15, BAR_SIZE*1.15, (BAR_SIZE*0.4)*1.15 ), 
        new THREE.MeshPhongMaterial( { 
            color: capColor,
            transparent: true,
            opacity: 0.35,
            blending: THREE.AdditiveBlending,
        } ) 
    );

    barCap.castShadow = useShadows;
    barCap.receiveShadow = useShadows;
  
    barCap.name = "cap";
    barCap.barID = barID;
    barCap.stem = barStem;
    barCap.colorIndex = capColorIndex;
    barCap.isTappable = true;
  
    /*
    barCap.onTap = () => { capTap(barCap, barStem) };
    barCap.onTapComplete = () => { tapComplete(barCap, barStem) };
    barCap.onNewRandomColor = () => { updateColor(barCap, true) };
    barCap.onStemSetComplete = () => { triggerStemHit (barCap) };
    barCap.onStemAttackComplete = () => { stemAttackComplete(barCap, barStem) };
    barCap.onStemBounceDownComplete = () => { stemBounceDownComplete(barCap, barStem) };
    */
    barStem.add(barCore);
    barStem.add(barTipLight);
    barStem.add(barTipDark);
    barStem.name = "stem";
  
    barStem.position.set( 0, 0, BAR_INITIAL_Z );
    barCap.position.set( 0, 0, BAR_SIZE );
    barCapGlow.position.set( 0, 0, BAR_SIZE );
  
    const gSingleBar = new THREE.Object3D();
    gSingleBar.barCap = barCap;
    gSingleBar.add( barStem );
    gSingleBar.add( barCap );
  //  gSingleBar.add( barCapGlow );
  
    return {bar:gSingleBar, barCap: barCap}
  
}
  
  // The Ground Plane under the stems
export const createGround = () => {
    const ground = new THREE.Group();
    const groundCenter = new THREE.Mesh( 
      new THREE.BoxGeometry( BAR_SIZE*5, BAR_SIZE*5, BAR_SIZE*0.75 ), 
      new THREE.MeshPhongMaterial( { 
          color: 0x555555,
          shininess: 1,
          specular: 0xFFFFFF,
      } ) 
    );
    const groundEdge = new THREE.Mesh( 
      new THREE.BoxGeometry( BAR_SIZE*6, BAR_SIZE*6, BAR_SIZE*0.65 ), 
      new THREE.MeshPhongMaterial( { 
          color: 0x222222,
          shininess: 1,
          specular: 0xFFFFFF,
      } ) 
    );
  
    groundCenter.castShadow = useShadows;
    groundCenter.receiveShadow = useShadows;
    groundEdge.castShadow = useShadows;
    groundEdge.receiveShadow = useShadows;

    ground.add( groundCenter );
    
    groundEdge.position.set(0,0,BAR_SIZE*-.3);
    ground.add( groundEdge );
  
    ground.position.set(0,-50,-50)
    ground.rotation.z = -45 * Math.PI / 180;
    ground.rotation.x = -35 * Math.PI / 180;
    
    return ground
  }
  
  // The single (larger) "Target Color"
export const createTargetCap = () => {

    // Allow for seeded puzzles
    const randoDando = () => Math.random();

    // The Color Cap ----
    const colorSet = COLOR_SETS;
    const MAX_COLOR = colorSet.length;
    const capColorIndex = Math.floor(randoDando() * MAX_COLOR)
    const capColor = colorSet[capColorIndex];
  
    const targetCap = new THREE.Mesh( 
      new THREE.BoxGeometry( BAR_SIZE*1.20, BAR_SIZE*1.20, BAR_SIZE*0.3 ), 
      new THREE.MeshPhongMaterial( { 
          color: capColor,
          specular: 0xFFFFFF,
          shininess: 50,
          emissive: capColor,
          emissiveIntensity: 0.1,
      } ) 
    );
  
    const targetCapShadow = new THREE.Mesh( 
      new THREE.BoxGeometry( BAR_SIZE*1.25, BAR_SIZE*1.25, BAR_SIZE*0.20 ), 
      new THREE.MeshStandardMaterial( { 
          color: 0x000000,
          transparent: true,
          opacity: 0.35
      } ) 
    );
  
    targetCap.name = "targetCap";
    targetCap.colorIndex = capColorIndex;
    targetCap.isTappable = false;  
  
    const verticalOffset = 36;
  
    targetCap.position.set(0,verticalOffset,BAR_SIZE)
    targetCap.rotation.z = -45 * Math.PI / 180;
    targetCap.rotation.x = -35 * Math.PI / 180;
  
    targetCapShadow.position.set(0,verticalOffset,BAR_SIZE*-0.15)
    targetCapShadow.rotation.z = -45 * Math.PI / 180;
    targetCapShadow.rotation.x = -35 * Math.PI / 180;
    
    const gTarget = new THREE.Group();
    gTarget.capRef = targetCap;
    gTarget.shadowRef = targetCapShadow;
    gTarget.add(targetCap);
    gTarget.add(targetCapShadow);
   
  
    return gTarget
  
}

