<template>
  <div class="course-card" :class="type">
    <div class="card-header">
      <h3>{{ title }}</h3>
      <span class="level-tag">{{ level }}</span>
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
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'basic'
    },
    level: {
      type: String,
      default: '初级'
    }
  }
}
</script>

<style scoped>
.course-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.course-card:hover {
  transform: translateY(-4px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.2rem;
  color: #333;
  margin: 0;
}

.level-tag {
  background: #e2e8f0;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.875rem;
  color: #4a5568;
}

.description {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* 不同类型课程的颜色主题 */
.basic {
  border-left: 4px solid #4299e1;
}

.application {
  border-left: 4px solid #48bb78;
}

.advanced {
  border-left: 4px solid #9f7aea;
}
</style>