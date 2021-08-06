<template>
<div class="row">
<div class="col-lg-4 mt-3" v-for="(history, index) in historys" :key="index">
<div class="card">
<div class="card-header">{{history.nama}}</div>
<div class="card-body">
<h5 class="card-title">{{history.jenjangpendidikan}}</h5>
<h5 class="card-title">{{history.tgl_masuk}}</h5>
<p class="card-text">{{history.tgl_lulus}}</p>
</div>
<div class="card-footer text-muted">
<router-link class="btn btn-primary" :to="{name:'Detailhistorys', params:{id:history.id}}">Detail</router-link>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
props: ["historys"],
};
</script>
