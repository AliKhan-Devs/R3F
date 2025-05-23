/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/scene.gltf 
Author: SDC PERFORMANCE™️ (https://sketchfab.com/3Duae)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/free-lamborghini-terzo-millennio-7ad3dffa9d344c3c978eafcc220cb709
Title: ( FREE ) Lamborghini Terzo Millennio
*/

import React, { useEffect, useRef } from 'react'

import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useControls } from 'leva'
export default function Model(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
  const wheelRef1 = useRef();
  const wheelRef2 = useRef();
  const wheelRef3 = useRef();
  const wheelRef4 = useRef();
let texture;
  function LoadTexture() {
      texture = useLoader(TextureLoader, '/road.jpg');
  
  }

const {speed } = useControls({
    speed: {
      value: 0.05, // Initial value
      min: 0,      // Minimum value for speed
      max: 1,      // Maximum value for speed
      step: 0.01   // Step size (optional for finer control)
    }
  });
  useFrame(() => {
    // Optionally, you can also animate with useFrame
    if (wheelRef1.current) {
      wheelRef1.current.rotation.x -= speed; // Incremental rotation
    }
    if (wheelRef2.current) {
      wheelRef2.current.rotation.x -= speed; // Incremental rotation
    }
    if (wheelRef3.current) {
      wheelRef3.current.rotation.x -=speed; // Incremental rotation
    }
    if (wheelRef4.current) {
      wheelRef4.current.rotation.x -= speed; // Incremental rotation
    }
  });
  
  useEffect(() => {
    // Iterate through all actions and play each one
    Object.values(actions).forEach(action => {
      action.play();
    });
    LoadTexture();
  }, [actions])
  return (
    <group ref={group} {...props} dispose={null} >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.811}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="detach_wing_10_carpaint_custom03_LOD2_0" position={[0.158, 0.294, -0.757]} scale={0.122}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Carosserie} />
              </group>
              <group name="top_wing_L_anim_4" position={[0.222, 0.364, -0.547]} rotation={[-Math.PI / 2, 1.571, 0]} scale={0.025}>
                <group name="detach_anim02_3" rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                  <group name="detach_anim02_details_LOD2_1" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.Orange} />
                  </group>
                  <group name="detach_anim02_tiled_carbon_LOD2_2" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.Blanck} />
                  </group>
                </group>
              </group>
              <group name="top_wing_R_anim_8" position={[-0.221, 0.364, -0.547]} rotation={[-Math.PI / 2, 1.571, 0]} scale={0.025}>
                <group name="detach_anim03_7" rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                  <group name="detach_anim03_details_LOD2_5" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.Orange} />
                  </group>
                  <group name="detach_anim03_tiled_carbon_LOD2_6" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.Blanck} />
                  </group>
                </group>
              </group>
              <group name="detach_anim04_LOD_tiled_carbon_LOD16_9" position={[0.187, 0.104, 0.316]} scale={0.122}>
                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.CARBONE} />
              </group>
              <group name="detach_03_5_details_orange_accents_LOD2_10" position={[-0.577, 0.11, 0.192]} scale={0.122}>
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.CARBONE} />
              </group>
              <group  name="Lambo_T_M_126" position={[0.001, 0.005, -0.002]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.025}>
                <group ref={wheelRef1} name="anteriore_dest_20" position={[15.014, 5.393, -22.681]}>
                  <group  name="bone_wheel_FR_rotation_3_19">
                    <group   name="wheelFR_3_14" position={[-0.609, 0, 0]} scale={0.949}>
                      <group  name="wheelFR_details_normal_LOD2_3_11" position={[7.707, -0.598, -1.111]} scale={4.808}>
                        <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.Jantes_I} />
                      </group>
                      <group  name="wheelFR_emissive_ID_rims_LOD2_3_12" position={[7.707, -0.598, -1.111]} scale={4.808}>
                        <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.Lumire_Orange} />
                      </group>
                      <group name="wheelFR_rims_LOD2_3_13" position={[7.707, -0.598, -1.111]} scale={4.808}>
                        <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.Jantes} />
                      </group>
                    </group>
                    <group   name="wheelFR_motion_3_17" position={[-0.507, -0.024, -0.008]} scale={0.949}>
                      <group name="wheelFR_motion_emissive_mesh_wheelmotion_front_LOD2_3_15" position={[7.659, -0.598, -1.111]} scale={4.808}>
                        <mesh name="Object_33" geometry={nodes.Object_33.geometry} material={materials.Jantes} />
                      </group>
                      <group name="wheelFR_motion_rims_LOD2_3_16" position={[7.707, -0.598, -1.111]} scale={4.808}>
                        <mesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials.material} />
                      </group>
                    </group>
                  </group>
                </group>
                <group  ref={wheelRef2} name="anteriore_sins_30" position={[-14.965, 5.393, -22.681]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <group name="bone_wheel_FR_rotation_4_29">
                    <group  name="wheelFR_4_24" position={[-0.609, 0, 0]} scale={0.949}>
                      <group name="wheelFR_details_normal_LOD2_4_21" position={[7.707, -0.598, -1.098]} scale={4.808}>
                        <mesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials.Jantes}  />
                      </group>
                      <group name="wheelFR_emissive_ID_rims_LOD2_4_22" position={[7.724, -0.598, -1.111]} scale={4.808}>
                        <mesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials.Lumire_Orange} />
                      </group>
                      <group name="wheelFR_rims_LOD2_4_23" position={[7.707, -0.598, -1.111]} scale={4.808}>
                        <mesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials.Jantes} />
                      </group>
                    </group>
                    <group name="wheelFR_motion_4_27" position={[-0.507, -0.024, -0.008]} scale={0.949}>
                      <group name="wheelFR_motion_emissive_mesh_wheelmotion_front_LOD2_4_25" position={[7.698, -0.598, -1.111]} scale={4.808}>
                        <mesh name="Object_47" geometry={nodes.Object_47.geometry} material={materials.Jantes} />
                      </group>
                      <group name="wheelFR_motion_rims_LOD2_4_26" position={[7.707, -0.598, -1.111]} scale={4.808}>
                        <mesh name="Object_49" geometry={nodes.Object_49.geometry} material={materials.material} />
                      </group>
                    </group>
                  </group>
                </group>
                <group  name="bone_anim_front_38" position={[0.001, 0.487, -36.868]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
                  <group name="detach_lip_5_37" rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                    <group name="detach_lip_5_details_LOD2_35" position={[7.707, -0.598, -1.111]} scale={4.808}>
                      <mesh name="Object_53" geometry={nodes.Object_53.geometry} material={materials.Carosserie} />
                    </group>
                    <group name="detach_lip_5_details_normal_LOD2_36" position={[7.707, -0.598, -1.111]} scale={4.808}>
                      <mesh name="Object_55" geometry={nodes.Object_55.geometry} material={materials.material_0} />
                    </group>
                  </group>
                </group>
                <group name="bone_anim_front_piston_41" position={[0, 1.29, -35.25]} rotation={[0, 0.914, -Math.PI / 2]}>
                  <group name="piston_moving_40" position={[2.07, -0.001, -0.136]} rotation={[0.914, 0, Math.PI / 2]}>
                    <group name="piston_moving_details_LOD2_39" position={[0.09, 2.017, -0.57]} scale={4.808}>
                      <mesh name="Object_59" geometry={nodes.Object_59.geometry} material={materials.Jantes} />
                    </group>
                  </group>
                </group>
                <group name="chassis_57" position={[-8.437, 8.469, -0.476]}>
                  <group name="chassis_carpaint02_LOD2_44" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials.Carosserie} />
                  </group>
                  <group name="chassis_carpaint_carbon_LOD2_45" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_64" geometry={nodes.Object_64.geometry} material={materials.CARBONE} />
                  </group>
                  <group name="chassis_carpaint_custom01_LOD2_46" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_66" geometry={nodes.Object_66.geometry} material={materials.Carosserie} />
                  </group>
                  <group name="chassis_carpaint_LOD2_47" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_68" geometry={nodes.Object_68.geometry} material={materials.Carosserie} />
                    <mesh name="Object_69" geometry={nodes.Object_69.geometry} material={materials['Material.001']} />
                  </group>
                  <group name="chassis_carpaint_normal_LOD2_48" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_71" geometry={nodes.Object_71.geometry} material={materials.Jantes} />
                  </group>
                  <group name="chassis_details_LOD2_49" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_73" geometry={nodes.Object_73.geometry} material={materials.Carosserie} />
                    <mesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials.Rouge} />
                    <mesh name="Object_75" geometry={nodes.Object_75.geometry} material={materials.Blanck} />
                    <mesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials.material} />
                    <mesh name="Object_77" geometry={nodes.Object_77.geometry} material={materials.Orange} />
                    <mesh name="Object_78" geometry={nodes.Object_78.geometry} material={materials.Vert} />
                    <mesh name="Object_79" geometry={nodes.Object_79.geometry} material={materials.Blanc} />
                    <mesh name="Object_80" geometry={nodes.Object_80.geometry} material={materials['Material.003']} />
                    <mesh name="Object_81" geometry={nodes.Object_81.geometry} material={materials['Material.038']} />
                    <mesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials['Material.039']} />
                    <mesh name="Object_83" geometry={nodes.Object_83.geometry} material={materials['Material.040']} />
                    <mesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials['Material.041']} />
                  </group>
                  <group name="chassis_details_normal_LOD2_50" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_86" geometry={nodes.Object_86.geometry} material={materials.Blanck} />
                    <mesh name="Object_87" geometry={nodes.Object_87.geometry} material={materials.Material} />
                    <mesh name="Object_88" geometry={nodes.Object_88.geometry} material={materials.BASE} />
                  </group>
                  <group name="chassis_emissive_ID_neons_LOD2_51" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_90" geometry={nodes.Object_90.geometry} material={materials['Material.002']} />
                  </group>
                  <group name="chassis_emissive_ID_rear_LOD2_52" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_92" geometry={nodes.Object_92.geometry} material={materials.material_0} />
                  </group>
                  <group name="chassis_emissive_ID_thirdlight_LOD2_53" position={[7.707, -0.598, -0.911]} scale={4.808}>
                    <mesh name="Object_94" geometry={nodes.Object_94.geometry} material={materials.Lumire_rouge} />
                  </group>
                  <group name="chassis_grid_LOD2_54" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_96" geometry={nodes.Object_96.geometry} material={materials.Carosserie} />
                  </group>
                  <group name="chassis_tiled_carbon_LOD2_55" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_98" geometry={nodes.Object_98.geometry} material={materials.CARBONE} />
                  </group>
                  <group name="chassis_underside_LOD2_56" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_100" geometry={nodes.Object_100.geometry} material={materials.material} />
                  </group>
                </group>
                <group name="detach_diffuser_5_59" position={[-13.323, 1.897, 29.609]}>
                  <group name="detach_diffuser_5_details_LOD2_58" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_103" geometry={nodes.Object_103.geometry} material={materials.Jantes} />
                  </group>
                </group>
                <group name="detach_door_L_60_63" position={[-11.195, 9.071, -18.779]}>
                  <group name="detach_door_L_60_carpaint_LOD2_60" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_106" geometry={nodes.Object_106.geometry} material={materials.Carosserie} />
                  </group>
                  <group name="detach_door_L_60_details_LOD2_61" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_108" geometry={nodes.Object_108.geometry} material={materials.Blanck} />
                  </group>
                  <group name="detach_door_L_60_details_normal_LOD2_62" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_110" geometry={nodes.Object_110.geometry} material={materials.material_0} />
                  </group>
                </group>
                <group name="detach_door_R_60_67" position={[11.182, 9.071, -18.779]}>
                  <group name="detach_door_R_60_carpaint_LOD2_64" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_113" geometry={nodes.Object_113.geometry} material={materials.Carosserie} />
                    <mesh name="Object_114" geometry={nodes.Object_114.geometry} material={materials['Material.001']} />
                  </group>
                  <group name="detach_door_R_60_details_LOD2_65" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_116" geometry={nodes.Object_116.geometry} material={materials.Blanck} />
                  </group>
                  <group name="detach_door_R_60_details_normal_LOD2_66" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_118" geometry={nodes.Object_118.geometry} material={materials.material_0} />
                  </group>
                </group>
                <group name="detach_skirt_L_15_74" position={[-16.648, 0.903, 18.107]}>
                  <group name="detach_skirt_L_15_carpaint02_LOD2_68" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_121" geometry={nodes.Object_121.geometry} material={materials.Jantes} />
                  </group>
                  <group name="detach_skirt_L_15_carpaint03_LOD2_69" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_123" geometry={nodes.Object_123.geometry} material={materials.Carosserie} />
                  </group>
                  <group name="detach_skirt_L_15_carpaint_LOD2_70" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_125" geometry={nodes.Object_125.geometry} material={materials.Carosserie} />
                  </group>
                  <group name="detach_skirt_L_15_details_LOD2_71" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_127" geometry={nodes.Object_127.geometry} material={materials.Orange} />
                    <mesh name="Object_128" geometry={nodes.Object_128.geometry} material={materials['Material.042']} />
                  </group>
                  <group name="detach_skirt_L_15_details_normal_LOD2_72" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_130" geometry={nodes.Object_130.geometry} material={materials.material_0} />
                  </group>
                  <group name="detach_skirt_L_15_grid_LOD2_73" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_132" geometry={nodes.Object_132.geometry} material={materials['Material.017']} />
                  </group>
                </group>
                <group name="detach_skirt_R_15_81" position={[16.648, 0.903, 18.107]}>
                  <group name="detach_skirt_R_15_carpaint02_LOD2_75" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_135" geometry={nodes.Object_135.geometry} material={materials.material_0} />
                  </group>
                  <group name="detach_skirt_R_15_carpaint03_LOD2_76" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_137" geometry={nodes.Object_137.geometry} material={materials.Carosserie} />
                  </group>
                  <group name="detach_skirt_R_15_carpaint_LOD2_77" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_139" geometry={nodes.Object_139.geometry} material={materials.Carosserie} />
                  </group>
                  <group name="detach_skirt_R_15_details_LOD2_78" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_141" geometry={nodes.Object_141.geometry} material={materials.Orange} />
                    <mesh name="Object_142" geometry={nodes.Object_142.geometry} material={materials['Material.042']} />
                  </group>
                  <group name="detach_skirt_R_15_details_normal_LOD2_79" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_144" geometry={nodes.Object_144.geometry} material={materials.material_0} />
                  </group>
                  <group name="detach_skirt_R_15_grid_LOD2_80" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_146" geometry={nodes.Object_146.geometry} material={materials['Material.017']} />
                  </group>
                </group>
                <group name="detach_trunk_50_85" position={[-0.007, 15.687, 9.112]}>
                  <group name="detach_trunk_50_carpaint_custom02_LOD2_82" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_149" geometry={nodes.Object_149.geometry} material={materials.Carosserie} />
                  </group>
                  <group name="detach_trunk_50_details_normal_LOD2_83" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_151" geometry={nodes.Object_151.geometry} material={materials.material_0} />
                  </group>
                  <group name="detach_trunk_50_tiled_carbon_LOD2_84" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_153" geometry={nodes.Object_153.geometry} material={materials.CARBONE} />
                  </group>
                </group>
                <group name="emissive_mesh_88" position={[-10.286, 10.651, 34.023]}>
                  <group name="emissive_mesh_emissive_mesh_exhaust_LOD6_86" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_156" geometry={nodes.Object_156.geometry} material={materials.Carosserie} />
                  </group>
                  <group name="emissive_mesh_emissive_mesh_static_LOD6_87" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_158" geometry={nodes.Object_158.geometry} material={materials.Carosserie} />
                  </group>
                </group>
                <group name="front_piston_91" position={[0.001, 2.661, -33.695]}>
                  <group name="front_piston_details_LOD2_89" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_161" geometry={nodes.Object_161.geometry} material={materials.material} />
                  </group>
                  <group name="front_piston_details_LOD4_90" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_163" geometry={nodes.Object_163.geometry} material={materials.material_0} />
                  </group>
                </group>
                <group name="glass_93" position={[0.001, 12.219, 3.48]}>
                  <group name="glass_glass_LOD2_92" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_166" geometry={nodes.Object_166.geometry} material={materials.Carosserie} />
                    <mesh name="Object_167" geometry={nodes.Object_167.geometry} material={materials.Vitres} />
                    <mesh name="Object_168" geometry={nodes.Object_168.geometry} material={materials.Lumire_blanche} />
                    <mesh name="Object_169" geometry={nodes.Object_169.geometry} material={materials.Lumire_rouge} />
                  </group>
                </group>
                <group name="glass_detachable_95" position={[-0.002, 12.708, 5.84]}>
                  <group name="glass_detachable_glass_LOD2_94" position={[7.707, -0.598, -1.111]} scale={4.808}>
                    <mesh name="Object_172" geometry={nodes.Object_172.geometry} material={materials.Vitres} />
                  </group>
                </group>
                <group ref={wheelRef3} name="post_dest_105" position={[14.441, 5.837, 22.528]}>
                  <group name="bone_wheel_FR_rotation_104">
                    <group  name="wheelFR_99" position={[-0.871, 0, 0]} scale={0.949}>
                      <group name="wheelFR_details_normal_LOD2_96" position={[11.015, -0.644, -1.196]} scale={4.808}>
                        <mesh name="Object_177" geometry={nodes.Object_177.geometry} material={materials.Jantes_I} />
                      </group>
                      <group name="wheelFR_emissive_ID_rims_LOD2_97" position={[11.015, -0.644, -1.196]} scale={4.808}>
                        <mesh name="Object_179" geometry={nodes.Object_179.geometry} material={materials.Lumire_Orange} />
                      </group>
                      <group name="wheelFR_rims_LOD2_98" position={[11.015, -0.644, -1.196]} scale={4.808}>
                        <mesh name="Object_181" geometry={nodes.Object_181.geometry} material={materials.Jantes} />
                      </group>
                    </group>
                    <group  name="wheelFR_motion_102" position={[-0.724, -0.026, -0.009]} scale={0.949}>
                      <group   name="wheelFR_motion_emissive_mesh_wheelmotion_front_LOD2_100" position={[10.903, -0.644, -1.196]} scale={4.808}>
                        <mesh name="Object_184" geometry={nodes.Object_184.geometry} material={materials.Jantes} />
                      </group>
                      <group name="wheelFR_motion_rims_LOD2_101" position={[11.015, -0.644, -1.196]} scale={4.808}>
                        <mesh name="Object_186" geometry={nodes.Object_186.geometry} material={materials.material} />
                      </group>
                    </group>
                  </group>
                </group>
                <group ref={wheelRef4} name="ppst_sinis_115" position={[-14.58, 5.837, 22.528]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <group name="bone_wheel_FR_rotation_2_114">
                    <group  name="wheelFR_2_109" position={[-0.908, 0, 0]} scale={0.949}>
                      <group name="wheelFR_details_normal_LOD2_2_106" position={[11.484, -0.644, -1.182]} scale={4.808}>
                        <mesh name="Object_191" geometry={nodes.Object_191.geometry} material={materials.Jantes_I} />
                      </group>
                      <group name="wheelFR_emissive_ID_rims_LOD2_2_107" position={[11.509, -0.644, -1.196]} scale={4.808}>
                        <mesh name="Object_193" geometry={nodes.Object_193.geometry} material={materials.Lumire_Orange} />
                      </group>
                      <group name="wheelFR_rims_LOD2_2_108" position={[11.484, -0.644, -1.196]} scale={4.808}>
                        <mesh name="Object_195" geometry={nodes.Object_195.geometry} material={materials.Jantes} />
                      </group>
                    </group>
                    <group name="wheelFR_motion_2_112" position={[-0.755, -0.026, -0.009]} scale={0.949}>
                      <group name="wheelFR_motion_emissive_mesh_wheelmotion_front_LOD2_2_110" position={[11.47, -0.644, -1.196]} scale={4.808}>
                        <mesh name="Object_198" geometry={nodes.Object_198.geometry} material={materials.Jantes} />
                      </group>
                      <group name="wheelFR_motion_rims_LOD2_2_111" position={[11.484, -0.644, -1.196]} scale={4.808}>
                        <mesh name="Object_200" geometry={nodes.Object_200.geometry} material={materials.material} />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group name="Roues_arri��re003_128" rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.187, 0.223, 0.187]}>
                <mesh name="Object_202" geometry={nodes.Object_202.geometry} material={materials.Tire} />
              </group>
              <group name="<Wheel002_129" position={[0, 0.158, 0.937]} rotation={[0.632, -0.96, Math.PI / 2]} scale={[0.629, 0.736, 0.736]}>
                <mesh name="Object_204" geometry={nodes.Object_204.geometry} material={materials['Material.023']} />
              </group>
              <group name="Roues_arri��re001_130" rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.187, 0.223, 0.187]}>
                <mesh name="Object_206" geometry={nodes.Object_206.geometry} material={materials['Tire.001']} />
              </group>
              <group name="Circle003_131" scale={0.372}>
                <mesh name="Object_208" geometry={nodes.Object_208.geometry} material={materials.Carbone} />
                <mesh name="Object_209" geometry={nodes.Object_209.geometry} material={materials['Material.018']} />
                <mesh name="Object_210" geometry={nodes.Object_210.geometry} material={materials['Material.025']} />
                <mesh name="Object_211" geometry={nodes.Object_211.geometry} material={materials['Material.026']} />
                <mesh name="Object_212" geometry={nodes.Object_212.geometry} material={materials['Material.027']} />
                <mesh name="Object_213" geometry={nodes.Object_213.geometry} material={materials['Material.028']} />
                <mesh name="Object_214" geometry={nodes.Object_214.geometry} material={materials['Material.029']} />
                <mesh name="Object_215" geometry={nodes.Object_215.geometry} material={materials['Volant.003']} />
                <mesh name="Object_216" geometry={nodes.Object_216.geometry} material={materials['Material.030']} />
                <mesh name="Object_217" geometry={nodes.Object_217.geometry} material={materials['Material.031']} />
                <mesh name="Object_218" geometry={nodes.Object_218.geometry} material={materials['Material.032']} />
                <mesh name="Object_219" geometry={nodes.Object_219.geometry} material={materials['Material.033']} />
                <mesh name="Object_220" geometry={nodes.Object_220.geometry} material={materials['Fer.001']} />
                <mesh name="Object_221" geometry={nodes.Object_221.geometry} material={materials['Material.034']} />
                <mesh name="Object_222" geometry={nodes.Object_222.geometry} material={materials['Material.036']} />
                <mesh name="Object_223" geometry={nodes.Object_223.geometry} material={materials['Material.037']} />
              </group>
              <group name="<Wheel001_132" rotation={[2.531, 0, Math.PI]} scale={[0.287, 0.336, 0.336]}>
                <mesh name="Object_225" geometry={nodes.Object_225.geometry} material={materials['Material.044']} />
              </group>
              <group name="Lamborghini_Terzo_Millennio_car_149" position={[0.001, 0.005, -0.002]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.025}>
                <group name="anteriore_dest001_136" position={[15.014, 5.393, -22.681]}>
                  <group name="bone_wheel_FR_rotation_3001_135">
                    <group name="wheelFR_3001_134" position={[-0.609, 0, 0]} scale={0.949}>
                      <group name="wheelFR_glass_LOD2_3_133" position={[7.707, -0.598, -1.111]} scale={4.808}>
                        <mesh name="Object_231" geometry={nodes.Object_231.geometry} material={materials['Material.049']} />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="anteriore_sins001_140" position={[-14.965, 5.393, -22.681]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <group name="bone_wheel_FR_rotation_4001_139">
                    <group name="wheelFR_4001_138" position={[-0.609, 0, 0]} scale={0.949}>
                      <group name="wheelFR_glass_LOD2_4_137" position={[7.707, -0.598, -1.111]} scale={4.808}>
                        <mesh name="Object_236" geometry={nodes.Object_236.geometry} material={materials['Material.049']} />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="post_dest001_144" position={[14.441, 5.837, 22.528]}>
                  <group name="bone_wheel_FR_rotation001_143">
                    <group name="wheelFR001_142" position={[-0.871, 0, 0]} scale={0.949}>
                      <group name="wheelFR_glass_LOD2_141" position={[11.015, -0.644, -1.196]} scale={4.808}>
                        <mesh name="Object_241" geometry={nodes.Object_241.geometry} material={materials['Material.049']} />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="ppst_sinis001_148" position={[-14.58, 5.837, 22.528]} rotation={[-Math.PI, 0, -Math.PI]}>
                  <group name="bone_wheel_FR_rotation_2001_147">
                    <group name="wheelFR_2001_146" position={[-0.908, 0, 0]} scale={0.949}>
                      <group name="wheelFR_glass_LOD2_2_145" position={[11.484, -0.644, -1.196]} scale={4.808}>
                        <mesh name="Object_246" geometry={nodes.Object_246.geometry} material={materials['Material.049']} />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
