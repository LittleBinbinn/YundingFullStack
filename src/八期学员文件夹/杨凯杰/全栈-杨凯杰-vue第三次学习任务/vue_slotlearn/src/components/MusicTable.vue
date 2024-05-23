<template>
    <div>   
        <MusicHeader/>
        <br>
        <MusicCenter/>
    </div>
 
</template>


<script>

import MusicHeader from './MusicHeader.vue'
import MusicCenter from './MusicCenter.vue'


export default {
    name: 'MusicTable',
    components: { MusicCenter,MusicHeader },

}
</script>