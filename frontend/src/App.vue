<template>
  <div class="">
    <nav class="flex flex-col gap-2">
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/test">Go to Test page</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
    <footer class="">
      <Chat />
    </footer>
  </div>
</template>
