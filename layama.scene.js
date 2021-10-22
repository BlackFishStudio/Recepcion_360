// Created with Motiva Layama v1.5 LITE https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "Recepcion_3600000", a: "PhysCamera_Layama_Gym_005", p: new BABYLON.Vector3(3035.3, 150, 3020.3), l: new BABYLON.Vector3(3036.19, 150, 3019.84)});
   layamaCameras.push({n: "Recepcion_3600001", a: "PhysCamera_Layama_Gym_006", p: new BABYLON.Vector3(3380.51, 150, 2831.43), l: new BABYLON.Vector3(3381.4, 150, 2830.97)});
   layamaCameras.push({n: "Recepcion_3600002", a: "PhysCamera_Layama_Gym_007", p: new BABYLON.Vector3(3602.02, 150, 2628.34), l: new BABYLON.Vector3(3602.91, 150, 2627.88)});
   layamaCameras.push({n: "Recepcion_3600003", a: "PhysCamera_Layama_Gym_008", p: new BABYLON.Vector3(3301.4, 150, 3178.83), l: new BABYLON.Vector3(3302.29, 150, 3178.37)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

