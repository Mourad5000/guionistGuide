<template>
  <v-alert :type="alertType"> I'm a success alert. </v-alert>
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
