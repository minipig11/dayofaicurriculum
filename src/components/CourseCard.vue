<template>
  <div class="course-card" :data-type="type">
    <div class="card-header" @click="toggleDrawer">
      <h3>{{ title }}</h3>
      <div class="meta">
        <span class="level">{{ level }}</span>
        <span class="age-range">{{ ageRange }}</span>
      </div>
      <p class="description">{{ description }}</p>
      <span class="arrow" :class="{ 'is-open': isOpen }">▼</span>
    </div>
    <div class="drawer" :class="{ 'is-open': isOpen }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    title: { type: String, required: true },
    type: { type: String, required: true },
    level: { type: String, required: true },
    ageRange: { type: String, required: true },
    description: { type: String, required: true }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleDrawer() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.course-card {
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  cursor: pointer;
  width: 100%;
  display: block;
}

h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.meta {
  margin-bottom: 1rem;
}

.level, .age-range {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.2);
  margin-right: 0.5rem;
  font-size: 0.875rem;
}

.description {
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.drawer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.drawer.is-open {
  max-height: 500px;
}

.card-header {
  cursor: pointer;
  position: relative;
  padding-right: 2rem;
  width: 100%;
  display: block;
}

.arrow {
  position: absolute;
  right: 0;
  top: 1rem;
  transition: transform 0.3s ease;
}

.arrow.is-open {
  transform: rotate(180deg);
}
</style>