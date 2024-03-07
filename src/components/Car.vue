<script>
import { store } from '../store';
export default {
    props: {
        car: Object,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
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
    <div class="col-4 my-4">

        <div class="my_card container">
            <div class="row">

                <div class="col-5">
                    <div>
                        <img :src="getImage()" :alt="car.model">
                    </div>
                </div>

                <div class="col-7">
                    <div>
                        <h5 class="card-title">{{ car.model }}</h5>
                    </div>

                    <div>
                        <ul>
                            <li>Car price: {{ car.price.toFixed(2) }} €</li>
                            <li>Car year {{ car.year }}</li>
                            <li>Fuel type: {{ car.fuel_type }}</li>
                        </ul>
                    </div>

                    <div class="button_container">
                        <router-link class=" text-decoration-none" :to="{ name: 'detail_car', params: { id: car.id } }">
                            <span class="my_front_button">Details</span>
                        </router-link>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
@use '../styles/generals.scss' as *;

.my_card {

    color: white;
    border: 1px solid $purple;
    padding: 10px 10px;

    img {
        width: 170px;
        height: 170px;
    }

    h5 {
        padding: 7px;
        font-size: 18px;
    }

    ul {
        padding: 10px 25px;

        li {
            font-size: 14px;
        }
    }

    .button_container {
        margin-left: 120px;
        margin-bottom: 10px;
    }

}
</style>
