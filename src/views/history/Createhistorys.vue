<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add History Pendidikans</h5>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama Lengkap</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="history.nama" />
      <div class="alert alert-danger" v-if="validation.nama">
        {{ validation.nama[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Jenjang Pendidikan</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="history.jenjangpendidikan"/>
    <div class="alert alert-danger" v-if="validation.jenjangpendidikan">
        {{ validation.jenjangpendidikan[0] }}
      </div>
  </div>
   </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Tanggal Masuk</label>
    <input type="date" class="form-control" id="inputPassword4"
    v-model="history.tgl_masuk"/>
    <div class="alert alert-danger" v-if="validation.tgl_masuk">
        {{ validation.tgl_masuk[0] }}
      </div>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Tanggal Lulus</label>
    <input type="date" class="form-control" id="inputAddress" 
    v-model="history.tgl_lulus" />
    <div class="alert alert-danger" v-if="validation.tgl_lulus">
        {{ validation.tgl_lulus[0] }}
      </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { reactive, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const friend = reactive({
      nama: '',
      jenjangpendidikan: '',
     tgl_masuk'',
      tgl_lulus: ''
    })
    const validation = ref([])

    const router = useRouter()

})
    function store(){
      let nama = history.nama
      let jenjangpendidikan = history.jenjangpendidikan
      let tgl_masuk = history.tgl_masuk
      let tgl_lulus = history.tgl_lulus
     

      axios.post('http://127.0.0.1:8000/api/historys', {
        nama: nama,
        no_tlp: no_tlp,
       tgl_masuk:tgl_masuk,
        tgl_lulus: tgl_lulus
      }).then(() => {
        router.push({
          name:'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      history,
      validation,
      router, 
      store,
    }
  },
}
</script>