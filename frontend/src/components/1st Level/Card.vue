<script setup lang="ts">
import { CardProps } from './Card.props'
defineProps<CardProps>()
</script>
<template>{{ name }}<img :src="`/src/assets/playingcards/${id}.png`" class="h-[100px]" /></template>
