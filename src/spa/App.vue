<script setup>
	import {RouterLink, RouterView} from 'vue-router';
</script>

<template>
	<nav>
		<a href="/">Home static</a><br>
		<RouterLink to="/">SPA home</RouterLink><br>
		<RouterLink to="/about">SPA about</RouterLink>
	</nav>
	<RouterView />
</template>