<template>
  <div class="course-card" :data-type="type">
    <h3>{{ title }}</h3>
    <div class="meta">
      <span class="level">{{ level }}</span>
      <span class="age-range">{{ ageRange }}</span>
    </div>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      validator: value => ['basic', 'application', 'advanced'].includes(value)
    },
    level: {
      type: String,
      required: true
    },
    ageRange: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.course-card {
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
</style>