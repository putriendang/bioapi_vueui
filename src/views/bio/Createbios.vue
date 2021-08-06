<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add Biodatas</h5>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama Lengkap</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="bio.nama" />
      <div class="alert alert-danger" v-if="validation.nama">
        {{ validation.nama[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">No Telepon</label>
    <input type="number" class="form-control" id="inputPassword4"
    v-model="bio.no_tlp"/>
    <div class="alert alert-danger" v-if="validation.no_tlp">
        {{ validation.no_tlp[0] }}
      </div>
  </div>
   </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Tanggal Lahir</label>
    <input type="date" class="form-control" id="inputPassword4"
    v-model="bio.tgl_lahir"/>
    <div class="alert alert-danger" v-if="validation.tgl_lahir">
        {{ validation.tgl_lahir[0] }}
      </div>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Alamat</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Masukkan Alamat"
    v-model="bio.alamat" />
    <div class="alert alert-danger" v-if="validation.alamat">
        {{ validation.alamat[0] }}
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
      no_tlp: '',
      tgl_lahir'',
      alamat: ''
    })
    const validation = ref([])

    const router = useRouter()

})
    function store(){
      let nama = bio.nama
      let no_tlp = bio.no_tlp
      let tgl_lahir = bio.tgl_lahir
      let alamat = bio.alamat
     

      axios.post('http://127.0.0.1:8000/api/bios', {
        nama: nama,
        no_tlp: no_tlp,
        tgl_lahir: tgl_lahir,
        alamat: alamat
      }).then(() => {
        router.push({
          name:'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      bio,
      validation,
      router, 
      store,
    }
  },
}
</script>