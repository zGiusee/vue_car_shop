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
        }
    },
}
</script>

<template>
    <div class="col-12 my-4">

        <div class="m-5">
            <div class="my-4">
                <h3><span>Car model:</span> {{ car.model }}</h3>
            </div>

            <div>
                <p><span>Car brand:</span> {{ car.brand ? car.brand.name : 'No Brand' }}</p>
            </div>

            <div>
                <p><span>Car price:</span> {{ car.price }}</p>
            </div>

            <div>
                <p><span>Car km:</span> {{ car.km }}</p>
            </div>

            <div>
                <p><span>Car immatricolation year:</span> {{ car.immatricolation_year }}</p>
            </div>

            <div>
                <p><span>Car plate:</span> {{ car.plate }}</p>
            </div>

            <div>
                <p><span>Car year:</span> {{ car.year }}</p>
            </div>

            <div>
                <p><span>Car color:</span> {{ car.color }}</p>
            </div>

            <div>
                <p><span>Car fuel type:</span> {{ car.fuel_type }}</p>
            </div>

            <div>
                <p><span>Car description:</span>{{ car.description }}</p>
            </div>

            <div>
                <p><span>Car seats:</span>{{ car.seats }}</p>
            </div>

            <div>
                <p><span>Car transmission:</span>{{ car.transmission }}</p>
            </div>

            <div>
                <p><span>Car owners:</span>{{ car.owners }}</p>
            </div>

            <div>
                <p><span>Car engine size:</span>{{ car.engine_size }}</p>
            </div>

            <div>
                <p><span>Car power:</span>{{ car.power }}</p>
            </div>

            <div>
                <p><span>Car paint type:</span>{{ car.paint_type }}</p>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
span {
    font-weight: bold;
}
</style>