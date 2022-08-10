const { createApp, ref } = Vue;

const app = createApp({
    setup(){
        
        /*
        const url = "http://localhost:5000";
        const profileUser = ref("");
        const nameFirst = ref("");
        const nameLast = ref("");
        */

        //For Tugas 3
        const urlFood = "http://localhost:5000/food";
        const urlDrink = "http://localhost:5000/drink";
        const food = ref([]);
        const drink = ref([]);
        const div = document.getElementById("view");

        /*
        const generateUser = async () => {
            const resUser = await axios.get(urlmak);

            makanan.value = resUser.data.makanan[].;
            nameFirst.value = resUser.data.results[0].name.first;
            nameLast.value = resUser.data.results[0].name.last;
            profileUser.value = resUser.data.results[0].picture.large;
        };
        */

        const generateFood = async () => {
            const respond = await axios.get(urlFood);

            food.value = respond.data;
            drink.value = [];
        };

        const generateDrink = async () => {
            const respond = await axios.get(urlDrink);

            drink.value = respond.data;
            food.value = [];
        };

        return {
            generateFood,
            generateDrink,
            food,
            drink,
            div,
        };
    },
});

app.mount("#app");