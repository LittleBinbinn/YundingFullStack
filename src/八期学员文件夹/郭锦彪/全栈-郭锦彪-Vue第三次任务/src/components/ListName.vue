<template>
    <h3 class="first">{{ title }}</h3>
    <div>
        <div>
            <slot name="head">
            </slot>
        </div>
        <div>
            <slot name="body">
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type : String
        }
    }
}
</script>

<style>
</style>