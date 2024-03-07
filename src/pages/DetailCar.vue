<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    data() {
        return {
            store,
            car: '',
        }
    },
    created() {
        this.getCar();
    },
    methods: {
        getCar() {
            axios.get(`${this.store.endPoint}/api/cars/${this.$route.params.id}`).then((response) => {
                this.car = response.data.car;
            })
        },
        getImage() {
            let image;

            if (this.car.img != null) {

                if (this.car.img.includes('https')) {

                    return `${this.car.img}`

                } else {
                    image = `/storage/${this.car.img}`
                }

            } else {
                image = '/storage/cars_image/carplaceholder.png'
            }

            return `${this.store.endPoint}${image}`
        },
    },
}
</script>

<template>
    <div>
        <div class="bg-white py-5">
            <div class="container py-3">
                <div class="row">
                    <div class="col-7">
                        <div class="image_container">
                            <img :src="getImage()" alt="image_car">
                        </div>

                        <!-- ICONE SOTTO IMMAGINE -->
                        <div class="sub_image_icon_container my-4  border rounded-2 py-2">
                            <div class="row justify-content-center">
                                <div class="col-3 text-center">
                                    <div>
                                        <span><i class="fa-solid fa-road"></i></span>
                                        <span class="fw-bolder">Km</span>
                                    </div>
                                    <div>{{ car.km }}</div>
                                </div>
                                <div class="col-3 text-center">
                                    <div>
                                        <span><i class="fas fa-cogs"></i></span>
                                        <span class="fw-bolder">Transmission</span>
                                    </div>
                                    <div>{{ car.transmission }}</div>
                                </div>
                                <div class="col-3 text-center">
                                    <div>
                                        <span><i class="fas fa-calendar-alt"></i>
                                        </span>
                                        <span class="fw-bolder">Year</span>
                                    </div>
                                    <div>{{ car.year }}</div>
                                </div>
                            </div>

                            <div class="row py-3 justify-content-center">
                                <div class="col-3 text-center">
                                    <div>
                                        <span><i class="fa-solid fa-gas-pump"></i></span>
                                        <span class="fw-bolder">Fuel type</span>
                                    </div>
                                    <div>{{ car.fuel_type }}</div>
                                </div>
                                <div class="col-3 text-center">
                                    <div>
                                        <span><i class="fa-solid fa-car"></i></span>
                                        <span class="fw-bolder">Power</span>
                                    </div>
                                    <div>{{ car.power }}</div>
                                </div>
                                <div class="col-3 text-center">
                                    <div>
                                        <span><i class="fa-solid fa-user-tie"></i>
                                        </span>
                                        <span class="fw-bolder">Owner</span>
                                    </div>
                                    <div>{{ car.owners }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- LISTA ICONE  -->
                    <div class="col-5">
                        <!-- NOME MODELLO  -->
                        <div class="fw-bolder fs-4 my-3">{{ car.model }}</div>

                        <!-- LOCATION  -->
                        <div class="text-primary pb-4 border-bottom">
                            <span class="me-2"><i class="fa-solid fa-location-dot"></i></span>
                            <span>Milan, IT</span>
                        </div>

                        <!-- PRICE  -->
                        <div class="my-5 fs-3">Price: {{ car.price.toFixed(2) }} €</div>

                        <!-- CONTACT  -->
                        <div class="pb-4 border-bottom">
                            <a class="my_front_button mx-3">Contact Owner</a>
                            <a class="my_front_button">+393194256877</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container border-top border-bottom">
                <div class="row">
                    <div class="col-12">
                        <h2 class="fw-bolder">Moore Details</h2>
                    </div>
                </div>

                <div class="row">
                    <ul class="list-unstyled">
                        <li class="my-2"><span class="text-uppercase fw-bolder ">Immatricolation year:</span>
                            <span class="fst-italic">{{ car.immatricolation_year != null ? car.immatricolation_year :
                                'Not available' }}</span>
                        </li>

                        <li class="my-2"><span class="text-uppercase fw-bolder">Used: </span>
                            <span class="fst-italic">{{ car.used != false ? 'Yes' : 'No' }}</span>
                        </li>

                        <li class="my-2"><span class="text-uppercase fw-bolder">Plate: </span>
                            <span class="fst-italic">{{ car.plate }}</span>
                        </li>

                        <li class="my-2"><span class="text-uppercase fw-bolder">Color: </span>
                            <span class="fst-italic">{{ car.color }}</span>
                        </li>

                        <li class="my-2"><span class="text-uppercase fw-bolder">Paynt type: </span>
                            <span class="fst-italic">{{ car.paint_type != null ? car.paint_type : 'Not available'
                                }}</span>
                        </li>

                        <li class="my-2"><span class="text-uppercase fw-bolder">Material type: </span>
                            <span class="fst-italic">{{ car.material_type != null ? car.material_type : 'Not available'
                                }}</span>
                        </li>

                        <li class="my-2"><span class="text-uppercase fw-bolder">Number of seats:</span>
                            <span class="fst-italic">{{ car.seats }}</span>
                        </li>

                        <li class="my-2"><span class="text-uppercase fw-bolder">Description: </span>
                            <span class="fst-italic">{{ car.description != null ? car.description : 'Not available'
                                }}</span>
                        </li>

                        <li class="my-2"><span class="text-uppercase fw-bolder">Engine size: </span>
                            <span class="fst-italic">{{ car.engine_size }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 700px;
    height: 400px;
}
</style>