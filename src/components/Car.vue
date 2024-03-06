<script>
export default {
    props: {
        car: Object,
    },
    data() {
        return {

        }
    },
    methods: {

    },
}

</script>

<template>
    <div class="col-3 my-4">

        <div class="card" style="width: 19rem;">
            <img class="card-img-top " :src="car.img" :alt="car.model">
            <div class="card-body">
                <h5 class="card-title">{{ car.model }}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Car price: {{ car.price }}$</li>
                    <li class="list-group-item">Car year {{ car.year }}</li>
                    <li class="list-group-item">Fuel type: {{ car.fuel_type }}</li>
                </ul>

                <div class="py-2">
                    <router-link :to="{ name: 'detail_car', params: { id: car.id } }">
                        <span class="btn btn-succes border-1 border-black">Details</span>
                    </router-link>
                </div>

            </div>
        </div>

    </div>
</template>

<style scoped lang="scss"></style>
