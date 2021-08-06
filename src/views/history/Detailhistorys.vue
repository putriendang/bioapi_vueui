<template>
    <div class="card text-center mt-4" v-for="h in friend" :key="h.id">
  <div class="card-header">
    Detail History Pendidkan
  </div>
  <div class="card-body">
    <h5 class="card-title">{{h.nama}}</h5>
    <p class="card-text">{{h.jenjangpendidikan}}</p>
    <p class="card-text">{{h.tgl_masuk}}</p>
    <p class="card-text">{{h.tgl_lulus}}</p>
  </div>
  <div class="card-footer">
    <router-link class="btn btn-success" :to="{name:'Edithistorys', params:{id:h.id}}">Edit</router-link>
        <button @click.prevent="historyDelete(h.id)" class="btn btn-danger">Delete</button>
  </div>
</div>

</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
      let history = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/historys/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama);

        history.value = response.data.data;
        
      }).catch(error =>{
        console.log(error.response.data);
      });
    });

    function historyDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/historys/${id}`)
      .then(()=>{
        router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }

    
    return {
      history,
      router, 
      historyDelete,
      route
    }
  },
}
</script>