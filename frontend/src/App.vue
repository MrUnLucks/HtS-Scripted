<template>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <br />
    <RouterLink to="/test">Go to Test page</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
