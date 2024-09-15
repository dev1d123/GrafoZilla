<template>
    <div class="background">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'MainScreen',

});
</script>

  
<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: transparent;
  z-index: -1;
  transform-style: preserve-3d;
}

i {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  animation: screen infinite;
}


i:nth-child(1){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(2,226,252,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow:0px 0px 5px 0px #02e2fc;
	animation-duration: 5s;
}

i:nth-child(2){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(250,160,2,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow:0px 0px 5px 0px #faa002;
	animation-duration: 21s;
}

i:nth-child(3){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(20,252,2,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow:0px 0px 5px 0px #14fc02;
	animation-duration: 5s;
}

i:nth-child(4){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(252,2,196,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow:0px 0px 5px 0px #fc02c4;
	animation-duration: 4s;
}

i:nth-child(5){
    width:100px;
	height:100px;
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(139,44,148,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow:0px 0px 5px 0px #8b2c94;
	animation-duration: 5s;
}

i:nth-child(6){
background: -webkit-radial-gradient(center, ellipse cover,  rgba(251,184,41,0.65) 0%,rgba(0,0,0,0) 100%);
box-shadow:0px 0px 5px 0px #FBB829; 
	animation-duration: 6s;
}

i:nth-child(7){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(195,255,104,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow:0px 0px 5px 0px #C3FF68; 
	animation-duration: 15s;
}

i:nth-child(8){
    width:100px;
	height:100px;
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,0,102,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow:0px 0px 5px 0px #FF0066; 
	animation-duration: 5s;
}
i:nth-child(9){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,255,0,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow:0px 0px 5px 0px #FFFF00; 
	animation-duration: 13s;
}

i:nth-child(10){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(127,175,27,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow:0px 0px 5px 0px #7FAF1B; 
	animation-duration: 4s;
}

i:nth-child(11){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(1,210,255,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow:0px 0px 5px 0px #01D2FF; 
	animation-duration: 5s;
}

i:nth-child(12){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(237,247,255,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow:0px 0px 5px 0px #EDF7FF; 
	animation-duration: 6s;
}

i:nth-child(13){
    width:200px;
	height:200px;
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(0,255,255,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow:0px 0px 5px 0px #00FFFF; 
	animation-duration: 7s;
}

i:nth-child(14){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(0,0,255,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow:0px 0px 5px 0px #0000FF; 
	animation-duration: 14s;
}

i:nth-child(15){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(16,225,228,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow:0px 0px 5px 0px #10e1e4; 
	animation-duration: 9s;
}

i:nth-child(16){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,51,0,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow:0px 0px 5px 0px #FF3300; 
	animation-duration: 10s;
}
i:nth-child(17){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,234,232,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #FFEAE8;
	animation-duration: 4s;
}

i:nth-child(18){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,229,0,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #FFE500;
	animation-duration: 5s;
}

i:nth-child(19){
    width:200px;
	height:200px;
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,102,153,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #FF6699;
	animation-duration: 6s;
}

i:nth-child(20){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(84,156,204,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #549CCC;
	animation-duration: 7s;
}

i:nth-child(21){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(184,175,3,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #B8AF03;
	animation-duration: 8s;
}

i:nth-child(22){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(171,250,249,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #ABFAF9;
	animation-duration: 5s;
}

i:nth-child(23){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(127,15,255,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #7F0FFF;
	animation-duration: 4s;
}

i:nth-child(24){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(48,128,0,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #308000;
	animation-duration: 4s;
}

i:nth-child(25){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,38,38,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #FF2626;
	animation-duration: 4s;
}

i:nth-child(26){
    width:100px;
	height:100px;
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(15,29,215,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #0F1DD7;
	animation-duration: 5s;
}

i:nth-child(27){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(51,102,153,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #336699;
	animation-duration: 6s;
}

i:nth-child(28){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(70,172,255,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #46ACFF;
	animation-duration: 7s;
}

i:nth-child(29){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(222,4,5,0.65) 0%,rgba(0,0,0,0) 100%);
    box-shadow: 0px 0px 5px 0px #DE0405;
	animation-duration: 8s;
}

i:nth-child(30){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(77,254,21,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #4DFE15;
	animation-duration: 9s;
}

i:nth-child(31){
	width:200px;
	height:200px;
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(243,10,70,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #F30A46;
	animation-duration: 10s;
}

i:nth-child(32){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(245,253,45,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #F5FD2D;
	animation-duration: 9s;
}

i:nth-child(33){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(178,0,255,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #B200FF;
	animation-duration: 3s;
}
i:nth-child(34){
	width:200px;
	height:200px;
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(102,204,255,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #66CCFF;
	animation-duration: 4s;
}

i:nth-child(35){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(20,243,175,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #14F3AF;
	animation-duration: 5s;
}

i:nth-child(36){
	width:200px;
	height:200px;
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(100,245,102,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #64F566;
	animation-duration: 6s;
}

i:nth-child(37){
	width:300px;
	height:300px;
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(236,218,65,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #ECDA41;
	animation-duration: 7s;
}

i:nth-child(38){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,61,45,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #FF3D2D;
	animation-duration: 8s;
}


i:nth-child(39){
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(74,73,235,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #4A49EB;
	animation-duration: 9s;
}

i:nth-child(40){
	width:200px;
	height:200px;
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,72,0,0.65) 0%,rgba(0,0,0,0) 100%);
	box-shadow: 0px 0px 5px 0px #FF4800;
	animation-duration: 10s;
}




i:nth-child(1) { top: 5%; left: 5%; }
i:nth-child(2) { top: 5%; left: 15%; }
i:nth-child(3) { top: 5%; left: 25%; }
i:nth-child(4) { top: 5%; left: 35%; }
i:nth-child(5) { top: 5%; left: 45%; }
i:nth-child(6) { top: 5%; left: 55%; }
i:nth-child(7) { top: 5%; left: 65%; }
i:nth-child(8) { top: 5%; left: 75%; }
i:nth-child(9) { top: 5%; left: 85%; }
i:nth-child(10) { top: 5%; left: 95%; }

i:nth-child(11) { top: 20%; left: 5%; }
i:nth-child(12) { top: 20%; left: 15%; }
i:nth-child(13) { top: 20%; left: 25%; }
i:nth-child(14) { top: 20%; left: 35%; }
i:nth-child(15) { top: 20%; left: 45%; }
i:nth-child(16) { top: 20%; left: 55%; }
i:nth-child(17) { top: 20%; left: 65%; }
i:nth-child(18) { top: 20%; left: 75%; }
i:nth-child(19) { top: 20%; left: 85%; }
i:nth-child(20) { top: 20%; left: 95%; }

i:nth-child(21) { top: 40%; left: 5%; }
i:nth-child(22) { top: 40%; left: 15%; }
i:nth-child(23) { top: 40%; left: 25%; }
i:nth-child(24) { top: 40%; left: 35%; }
i:nth-child(25) { top: 40%; left: 45%; }
i:nth-child(26) { top: 40%; left: 55%; }
i:nth-child(27) { top: 40%; left: 65%; }
i:nth-child(28) { top: 40%; left: 75%; }
i:nth-child(29) { top: 40%; left: 85%; }
i:nth-child(30) { top: 40%; left: 95%; }

i:nth-child(31) { top: 60%; left: 5%; }
i:nth-child(32) { top: 60%; left: 15%; }
i:nth-child(33) { top: 60%; left: 25%; }
i:nth-child(34) { top: 60%; left: 35%; }
i:nth-child(35) { top: 60%; left: 45%; }
i:nth-child(36) { top: 60%; left: 55%; }
i:nth-child(37) { top: 60%; left: 65%; }
i:nth-child(38) { top: 60%; left: 75%; }
i:nth-child(39) { top: 60%; left: 85%; }
i:nth-child(40) { top: 60%; left: 95%; }


@keyframes screen {
	from {
		opacity: 0;
	}

	25%{
		opacity: 0.3;
		transform: scale3d(3, 3, 4);
	}

	50%{
		opacity: 0.75;
	}

	75%{
		opacity: 1;

	}

	to{
		opacity: 0;
	}
}
</style>
