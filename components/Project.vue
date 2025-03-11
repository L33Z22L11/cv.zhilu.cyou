<script setup lang="ts">
defineProps<{
    name: string
    desc: string
    link?: string
    from: string
    to?: string
    techs: Tech[]
}>()
</script>

<template>
    <section m="y-3">
        <p block="~" bg="gray-400/20" m="x--2" p="x-2 y-.5" rounded="1">
            <span float="left" m="ie-2" font="bold">{{ name }}</span>
            <span float="right" m="is-2">{{ from }} - {{ to ?? '至今' }}</span>

            <span m="ie-2" text="nowrap" op="80">{{ desc }}</span>
            <InfoLink v-if="link" op="80" :href="link" :text="link" />
        </p>

        <p text="sm" m="y-1">
            <span v-for="tech in techs" :key="tech" m="not-last:ie-2" text="nowrap">
                <Icon :name="getTechIcon(tech)" un-size="4" />
                <span m="is-.5">{{ tech }}</span>
            </span>
        </p>

        <slot />
    </section>
</template>
