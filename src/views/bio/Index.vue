<template>
<div class="home">
<!--<img alt="Vue logo" src="../assets/logo.png"> 
<Slider />-->
<hr class="my-3">
<router-link class="btn btn-primary" to="/createbio">Add Biodatas</router-link>

<Cardbio :bio="bio" />

<table class="table">
<thead>
<tr>
<th scope="col">Nama</th>
<th scope="col">No. Tlp</th>
<th scope="col">Tanggal Lahir</th>
<th scope="col">Alamat</th>
<th scope="col">Aksi</th>
</tr>
</thead>
<tbody>
<tr v-for="(bio, index) in bio" :key="index">
<td>{{ bio.nama }}</td>
<td>{{ bio.no_tlp }}</td>
<td>{{ bio.tgl_lahir}}</td>
<td>{{ bio.alamat }}</td>
<td>
<router-link class="btn btn-success" :to="{name:'Editbio', params:{id:bio.id}}">Edit</router-link>
<button @click.prevent="bioDelete(bio.id)" class="btn btn-danger">Delete</button>
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
import Cardbio from "@/components/Cardbio.vue";
import { ref, onMounted } from 'vue';

export default {
name: "Home",
components: {
Cardbio,
},
setup(){
let bio = ref([])

onMounted(() => {
axios.get('http://127.0.0.1:8000/api/bio')
.then(response => {
bio.value = response.data.data
})
.catch(error => {
console.log(error)
})
})

function bioDelete(id){
axios.delete(`http://127.0.0.1:8000/api/bio/${id}`)
.then(()=>{
let z = this.bio.map(bio => bio.id).indexOf(id);
this.bio.splice(z, 1)
}).catch(error => {
console.log(error)
})
}

return {
bio,
bioDelete
}
}
};
</script>