
<template>
    <div>
        <h2>{{ title }}</h2>
        <ul>
            <slot></slot>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ListComponent',
    props: {
        title: {
            type: String,
            required: true
        }
    }
};  
</script>