<script>
import axios from 'axios';
import { store } from '../store.js';
import Car from '../components/Car.vue'
export default {
    components: {
        Car,
    },
    data() {
        return {
            store,
            cars: [],
            brands: [],
            currentPage: 1,
            lastPage: null,
        }
    },
    created() {
        this.getCars();
        this.getBrands();
    },
    methods: {
        getCars(page_number) {
            axios.get(`${this.store.endPoint}/api/cars/brand/${this.$route.params.id}`, {
                params: {
                    page: page_number
                }
            }).then((response) => {

                this.cars = [];
                this.cars = response.data.results.data;

                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
            })
        },
        getBrands() {
            axios.get(`${this.store.endPoint}/api/brands`).then((response) => {

                this.brands = response.data.results;
            })
        }
    },

}
</script>

<template>
    <main class="py-5 my_bg_black">
        <div class="container">
            <div class="row">

                <div class="col-6">
                    <div>
                        <h2 class="text-white">Cars on sale:</h2>
                    </div>
                </div>

                <div class="col-6  d-flex align-items-center">
                    <div class="text-center">
                        <h5 class="text-white">Filter by brand:</h5>

                        <div @click="getCars()">
                            <router-link v-for="brand in brands" :to="{ name: 'car_brand', params: { id: brand.id } }"
                                class="brand">{{ brand.name }}</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-12">

                    <div class="container min-vh-100">
                        <div class="row">
                            <Car v-for="car in cars" :car="car"></Car>
                        </div>
                    </div>

                </div>

                <div class="col-12 mb-5">
                    <div class="page_button_container">
                        <div>
                            <button :class="currentPage == 1 ? 'disabled' : ''" @click=" getCars(currentPage - 1)"
                                class="my_front_button"><i class="bi bi-chevron-left"></i></button>
                        </div>
                        <div>
                            <button :class="currentPage == lastPage ? 'disabled' : ''" @click="getCars(currentPage + 1)"
                                class="my_front_button"><i class="bi bi-chevron-right"></i></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use '../styles/generals.scss' as *;

.page_button_container {
    display: flex;
    justify-content: center;

    button {
        margin: 5px;
    }
}

.brand {
    margin-right: 15px;
    color: white;
    text-decoration: none;

    &:hover {
        color: $purple;
        text-decoration: underline white;

    }
}
</style>
