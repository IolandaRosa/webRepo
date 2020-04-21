<template>
    <div class="component-container">
        <h1 class="title">Money Transactions List</h1>
        <div class="content">
            tabela e filtros
        </div>
    </div>
</template>
<script>
    export default {
        name: "Home",
        data() {
            return {
                data: [],
                categories: [],
            };
        },
        methods: {

        },
        mounted() {
            this.categories = this.$store.state.categories;

            console.log('categories', this.categories);

            if (this.$store.state.data) {
                this.data = this.$store.state.data;
                console.log('data', this.data);
                return;
            }


            this.axios.get("/transactions")
            .then(response => {
                const { data } = response;
                this.$store.commit('setData', data);
                this.data = this.$store.state.data;
                console.log('data with axios', this.data);
            }).catch(error => {
                console.log(error);
            })
        }
    }
</script>