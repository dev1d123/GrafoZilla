<template>
    <MainScreen></MainScreen>
    <NavBar></NavBar>
    <OptionsContainer></OptionsContainer>
    <FooterPage></FooterPage>
</template>

<script lang ="ts">
    import { defineComponent } from 'vue';
    import MainScreen from '@/components/MainScreen.vue';
    import NavBar from '@/components/NavBar.vue';
    import MainOption from '@/components/MainOption.vue';
    import OptionsContainer from '@/components/OptionsContainer.vue';
    import FooterPage from '@/components/FooterPage.vue';
    export default defineComponent({
        name: 'HomeView',
        components:{
            MainScreen,
            NavBar,
            OptionsContainer,
            FooterPage
        }
    });
</script>

<style scoped>
</style>