<template>
<div class="home">
<!--<img alt="Vue logo" src="../assets/logo.png"> 
<Slider />-->
<hr class="my-3">
<router-link class="btn btn-primary" to="/createhistory">Add Historys</router-link>

<Cardhistory :history="history" />

<table class="table">
<thead>
<tr>
<th scope="col">Nama</th>
<th scope="col">Jenjang Pendidikan</th>
<th scope="col">Tanggal Masuk</th>
<th scope="col">Tanggal Lulus</th>
<th scope="col">Aksi</th>
</tr>
</thead>
<tbody>
<tr v-for="(history, index) in history" :key="index">
<td>{{ history.nama }}</td>
<td>{{ history.jenjangpendidikan}}</td>
<td>{{ history.tgl_masuk}}</td>
<td>{{ history.tgl_lulus }}</td>
<td>
<router-link class="btn btn-success" :to="{name:'Edithistory', params:{id:history.id}}">Edit</router-link>
<button @click.prevent="historyDelete(history.id)" class="btn btn-danger">Delete</button>
</td>
</tr>
</tbody>
</table>
</div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
// import Slider from "@/components/Slider.vue";
import Cardhistory from "@/components/Cardhistory.vue";
import { ref, onMounted } from 'vue';

export default {
name: "Home",
components: {
Cardhistory,
},
setup(){
let history = ref([])

onMounted(() => {
axios.get('http://127.0.0.1:8000/api/history')
.then(response => {
history.value = response.data.data
})
.catch(error => {
console.log(error)
})
})

function historyDelete(id){
axios.delete(`http://127.0.0.1:8000/api/history/${id}`)
.then(()=>{
let z = this.history.map(history => history.id).indexOf(id);
this.history.splice(z, 1)
}).catch(error => {
console.log(error)
})
}

return {
history,
historyDelete
}
}
};
</script>