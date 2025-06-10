<template>
    <main>
      <h1>Curriculum</h1>
      <section>
        <h2>AI Literacy Foundations</h2>
        <div v-for="module in modules" :key="module.title">
          <h3>{{ module.title }}</h3>
          <p>{{ module.description }}</p>
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
  const modules = [
    {
      title: "AI for Early Elementary",
      description: "An introductory set of activities for young learners.",
    },
    {
      title: "What is AI?",
      description: "An introduction to what AI is and how it works.",
    },
  ];
  </script>
  
  <style scoped>
  /* 样式代码 */
  </style>