import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        categories: ["Restaurants", "Vehicles", "General", "Education"],
        data: null,
    },
    mutations: {
        setData: (state, data) => {
            if (data) {
                data.forEach(object => {
                    const { source } = object;

                    switch (source) {
                        case "source 1":
                            object.category = "Restaurants";
                            break;
                        case "source 2":
                            object.category = "Vehicles";
                            break;
                        default: object.category = null;
                    }
                });
            }
            state.data = data;
            sessionStorage.setItem('data', JSON.stringify(data));
        },
        loadCategoriesAndDataFromSession: (state) => {
            state.data = null;
            let data = sessionStorage.getItem('data');
            if (data) {
                state.data = data;
            }
        }
    }
});
