<template>
  <v-alert :type="alertType"> {{body}} </v-alert>
</template>

<script>
export default {
    name:'Alert',
    props:{
        alertType:{
            type:String,
            required:true
        },
        body:{
            type:String,
            required:true
        }
    }
}
</script>
