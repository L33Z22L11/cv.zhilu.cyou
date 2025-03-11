<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
    <section>
        <h2
            m="bs-4 be-2"
            b-b="2 solid gray-400/20"
            text="5"
        >
            {{ title }}
        </h2>
        <slot />
    </section>
</template>
