<template>
<div class="row">
<div class="col-lg-4 mt-3" v-for="(bio, index) in bios" :key="index">
<div class="card">
<div class="card-header">{{bio.nama}}</div>
<div class="card-body">
<h5 class="card-title">{{bio.no_tlp}}</h5>
<h5 class="card-title">{{bio.tgl_lahir}}</h5>
<p class="card-text">{{bio.alamat}}</p>
</div>
<div class="card-footer text-muted">
<router-link class="btn btn-primary" :to="{name:'Detailbios', params:{id:bio.id}}">Detail</router-link>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
props: ["bios"],
};
</script>
