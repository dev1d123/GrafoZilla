<template>
    <MainScreen></MainScreen>
    <NavBar></NavBar>
    <component :is="showSpecificOption ? 'SpecificOption' : 'OptionsContainer'" @selectSpecificOption="handleSpecificOption"/>
    <FooterPage></FooterPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainScreen from '@/components/MainScreen.vue';
import NavBar from '@/components/NavBar.vue';
import OptionsContainer from '@/components/OptionsContainer.vue';
import FooterPage from '@/components/FooterPage.vue';
import SpecificOption from '@/components/SpecificOption.vue';

export default defineComponent({
    name: 'HomeView',
    components: {
        MainScreen,
        NavBar,
        OptionsContainer,
        FooterPage,
        SpecificOption,
    },
    data() {
        return {
            showSpecificOption: false, 
        };
    },
    methods: {
        handleSpecificOption() {
            this.showSpecificOption = true; 
        },
    },
});
</script>

<style scoped>
</style>
