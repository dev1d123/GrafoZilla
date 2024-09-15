<template>
    <div class="navbar">
        <div class="logo">
            <div class="img-logo">
                <img src="whiteIcon.png" alt="White Icon">
            </div>
            <img src="logo.png" alt="Logo">
        </div>

        <div class="searchBar">
            <input type="text" placeholder="Search...">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="search-icon" />
        </div>

        <div class="options">
            <div class="button-container">
                <button>
                    Options
                    <font-awesome-icon :icon="['fas', 'sliders']" />
                </button>
                <button>
                    Contact Me
                    <font-awesome-icon :icon="['fas', 'message']" />
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'NavBar',
    });
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #a3b19f;
    color: white;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s ease;
    flex-wrap: wrap;
}

.logo {
    display: flex;
    align-items: center;
}

.img-logo img {
    height: 40px;
    margin-right: 10px;
}

.logo img {
    height: 5.5rem;
    transition: all 0.3s ease;
}

.logo img:hover {
    transform: scale(1.1); 
}

.searchBar {
    display: flex;
    align-items: center;
    background-color: #444;
    border-radius: 5px;
    padding: 5px;
    font-size: 2rem;
    transition: background-color 0.3s ease;
}

.searchBar:hover {
    background-color: #555; 
}

.searchBar input {
    border: none;
    background: transparent;
    color: white;
    padding: 5px;
    outline: none;
    flex-grow: 1;
    font-size: 2rem;
    transition: border 0.3s ease;
}

.searchBar input:focus {
    border-bottom: 2px solid white; 
}

.search-icon {
    color: white;
    margin-left: 5px;
    cursor: pointer;
    transition: color 0.3s ease;
}

.search-icon:hover {
    color: #ddd; 
}

.options {
    display: flex;
    align-items: center;
}

.button-container {
    display: flex;
    gap: 10px;
}

button {
    font-size: 1.5rem;
    background-color: #555;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
    background-color: #666; 
    transform: scale(1.05); 
}

button .fa {
    font-size: 1.5rem; 
}

@media (max-width: 768px) {
    .navbar {
        align-items: flex-start;
        padding: 1rem;
    }

    .logo {
        margin-bottom: 1rem;
    }

    .logo img {
        height: 4rem;
    }

    .searchBar {
        width: 100%;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .searchBar input {
        font-size: 1rem;
    }

    .button-container {
        width: 100%;
    }

    button {
        width: 100%;
        font-size: 1rem;
        justify-content: center;
    }

    .search-icon {
        font-size: 1rem;
    }
}
</style>
