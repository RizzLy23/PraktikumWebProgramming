const { createApp, ref, onMounted } = Vue;

const app = createApp({
    setup(){
        

        const url = "https://randomuser.me/api/";
        const profileUser = ref("");
        const nameFirst = ref("");
        const nameLast = ref("");

        const generateUser = async () => {
            const resUser = await axios.get(url);
            nameFirst.value = resUser.data.results[0].name.first;
            nameLast.value = resUser.data.results[0].name.last;
            profileUser.value = resUser.data.results[0].picture.large;
        };

        return {
            generateUser,
            profileUser,
            nameFirst,
            nameLast,
        };
    },
});

app.mount("#app");