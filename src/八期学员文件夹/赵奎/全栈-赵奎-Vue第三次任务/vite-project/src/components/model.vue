<template>
    <h2>{{title}}</h2>
    <div>
        <slot> </slot>
    </div>
</template>

<script>
export default {
    props:["title"],
}
</script>