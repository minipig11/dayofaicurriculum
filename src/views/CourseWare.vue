<template>
  <div class="course-ware">
    <main>
      <section class="course-ware-section">
        <h2>{{ courseTitle }}</h2>
        <p class="section-desc">{{ courseDescription }}</p>

        <div class="resource-list">
          <div class="resource-card">
            <div class="resource-divider"></div>
            <div class="resource-header">
              <h3 class="resource-title">教师指南</h3>
              <p class="resource-description">一份面向教师的文档，包含本单元的所有资源、学习目标和活动步骤。</p>
            </div>
            <ul class="document-list">
              <li v-for="doc in teacherGuideDocuments" :key="doc.name" @click="openDocument(doc.url)">{{ doc.name }}</li>
            </ul>
          </div>

          <div class="resource-card">
            <div class="resource-divider"></div>
            <div class="resource-header">
              <h3 class="resource-title">教师幻灯片</h3>
              <p class="resource-description">一份面向学生的幻灯片，包含本课程所有课程的幻灯片。</p>
            </div>
            <ul class="document-list">
              <li v-for="doc in teacherSlidesDocuments" :key="doc.name" @click="openDocument(doc.url)">{{ doc.name }}</li>
            </ul>
          </div>

          <div class="resource-card">
            <div class="resource-divider"></div>
            <div class="resource-header">
              <h3 class="resource-title">学生资源</h3>
              <p class="resource-description">一套可打印的图像和相关词汇定义集，以及一个家庭工作表和机器人规划工作表。</p>
            </div>
            <ul class="document-list">
              <li v-for="doc in studentResourcesDocuments" :key="doc.name" @click="openDocument(doc.url)">{{ doc.name }}</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Reading, Monitor, Management } from '@element-plus/icons-vue';
import { OSS_BASE_URL } from '@/config/index.js' // 导入公共配置的URL

const route = useRoute();
const courseId = ref(route.query.courseId || '');
const courseTitle = ref('课程资料');
const courseDescription = ref('这里将展示与课程相关的资料，包括教师指南、幻灯片和学生资源。');

// 各类文档列表
const teacherGuideDocuments = ref([]);
const teacherSlidesDocuments = ref([]);
const studentResourcesDocuments = ref([]);

onMounted(() => {
  // 根据 courseId 加载具体课程资料
  let url = OSS_BASE_URL + courseId.value + "/" 
  if (courseId.value === 'ai_basic') {
    courseTitle.value = '什么是AI？: 适合 5-7 岁';
    courseDescription.value = '《什么是AI？》幼儿早期模块通过互动活动和讨论，向儿童（5-7岁）介绍人工智能（AI）。本课程帮助学生区分人造（人造）和自然物体，并使用视觉辅助和分类练习。它解释了简单的智能术语，并将人类感官与机器传感器连接起来，演示AI驱动的设备如何使用摄像头、麦克风和其他传感器来"看"和"听"。学生们还参与了一项动手活动，他们设计自己的AI机器人，巩固了他们对AI如何与人类指导一起操作的理解。课程以反思问题和可选的家庭活动结束，以扩展课堂之外的学习。';
    teacherGuideDocuments.value = [
      { name: '教师指南文档1', url: url+'What is AI_ Early Childhood Edition _ Educator Guide.docx' }
    ];
    teacherSlidesDocuments.value = [
      { name: '幻灯片文档1', url: url+'_What is AI_ For Early Childhood_ Slide Show.pptx' }
    ];
    studentResourcesDocuments.value = [
      { name: '学生资源文档1', url: url+'Family Activity_ Build Your Own AI Robot.docx' }
    ];
  } else if (courseId.value === 'basic_what_is_ai') {
    courseTitle.value = '什么是AI？';
    courseDescription.value = '新：低年级和高年级活动！介绍 AI 是什么及其工作原理';
    teacherGuideDocuments.value = [
      { name: '教师指南文档1', url: url+'Ages 12-18_ What is AI_ _ Educator Guide.docx' }
    ];
    teacherSlidesDocuments.value = [
      { name: '幻灯片文档1', url: url+'Upper Grades-What is AI_ _ Slide Show.pptx' }
    ];
    studentResourcesDocuments.value = [
    ];
    // 更多文档...
  } else if (courseId.value === 'basic_machine_learning') {
    courseTitle.value = '什么是AI？';
    courseDescription.value = '新：低年级和高年级活动！介绍 AI 是什么及其工作原理';
    teacherGuideDocuments.value = [
      { name: '教师指南文档1', url: url+'_Updated, Dec. 2024-How Do Machines Learn_ _ Educator Guide.docx' }
    ];
    teacherSlidesDocuments.value = [
      { name: '幻灯片文档1', url: url+'_Updated, Dec. 2024-How Do Machines Learn_ _ Slide Show.pptx' }
    ];
    studentResourcesDocuments.value = [
      { name: '学生资源文档1', url: url+'Teachable Machine Partner Worksheet.docx' }
    ];
    // 更多文档...
  }else if (courseId.value === 'basic_gen_ai') {
    courseTitle.value = '什么是AI？';
    courseDescription.value = '新：低年级和高年级活动！介绍 AI 是什么及其工作原理';
    teacherGuideDocuments.value = [
      { name: '教师指南文档1', url: url+'_Updated, Dec. 2024-How Do Machines Create_ _ Educator Guide.docx' }
    ];
    teacherSlidesDocuments.value = [
      { name: '幻灯片文档1', url: url+'_Updated, Dec. 2024-How Do Machines Create_ _ Slide Show.pptx' }
    ];
    studentResourcesDocuments.value = [
    ];
    // 更多文档...
  }else if (courseId.value === 'art_ai') {
    courseTitle.value = '什么是AI？';
    courseDescription.value = '新：低年级和高年级活动！介绍 AI 是什么及其工作原理';
    teacherGuideDocuments.value = [
      { name: '教师指南文档1', url: url+'_Upper Grades_ Educator Guide - AI and the Creative Arts.docx' }
    ];
    teacherSlidesDocuments.value = [
      { name: '幻灯片文档1', url: url+'_Upper Grades_ Slide Deck - AI and the Creative Arts.pptx' }
    ];
    studentResourcesDocuments.value = [
    ];
    // 更多文档...
  } else if (courseId.value === 'app_creativity_1') {
    courseTitle.value = '什么是AI？';
    courseDescription.value = '新：低年级和高年级活动！介绍 AI 是什么及其工作原理';
    teacherGuideDocuments.value = [
      { name: '教师指南文档1', url: url+'_Upper Grades_ Educator Guide - AI and the Creative Arts.docx' }
    ];
    teacherSlidesDocuments.value = [
      { name: '幻灯片文档1', url: url+'_Upper Grades_ Slide Deck - AI and the Creative Arts.pptx' }
    ];
    studentResourcesDocuments.value = [
    ];
    // 更多文档...
  } else if (courseId.value === 'app_creativity_1') {
    courseTitle.value = '什么是AI？';
    courseDescription.value = '新：低年级和高年级活动！介绍 AI 是什么及其工作原理';
    teacherGuideDocuments.value = [
      { name: '教师指南文档1', url: url+'Using AI for Creativity Teacher Guides.docx' }
    ];
    teacherSlidesDocuments.value = [
      { name: '幻灯片文档1', url: url+'Lesson 1：What is Creativity-Slides.pptx' }
    ];
    studentResourcesDocuments.value = [
    ];
    // 更多文档...
  } else if (courseId.value === 'app_creativity_2') {
    courseTitle.value = '什么是AI？';
    courseDescription.value = '新：低年级和高年级活动！介绍 AI 是什么及其工作原理';
    teacherGuideDocuments.value = [
      { name: '教师指南文档1', url: url+'Using AI for Creativity Teacher Guides.docx' }
    ];
    teacherSlidesDocuments.value = [
      { name: '幻灯片文档1', url: url+'Lesson 2：Using AI for Creativity-Slides.pptx' }
    ];
    studentResourcesDocuments.value = [
    ];
    // 更多文档...
  } else if (courseId.value === 'app_creativity_3') {
    courseTitle.value = '什么是AI？';
    courseDescription.value = '新：低年级和高年级活动！介绍 AI 是什么及其工作原理';
    teacherGuideDocuments.value = [
      { name: '教师指南文档1', url: url+'Using AI for Creativity Teacher Guides.docx' }
    ];
    teacherSlidesDocuments.value = [
      { name: '幻灯片文档1', url: url+'Lesson 3：Do We Think Like AI-Slides.pptx' }
    ];
    studentResourcesDocuments.value = [
    ];
    // 更多文档...
  } else if (courseId.value === 'app_creativity_4') {
    courseTitle.value = '什么是AI？';
    courseDescription.value = '新：低年级和高年级活动！介绍 AI 是什么及其工作原理';
    teacherGuideDocuments.value = [
      { name: '教师指南文档1', url: url+'Using AI for Creativity Teacher Guides.docx' }
    ];
    teacherSlidesDocuments.value = [
      { name: '幻灯片文档1', url: url+'Lesson 4：Yarn Class Project-Slides.pptx' }
    ];
    studentResourcesDocuments.value = [
    ];
    // 更多文档...
  }
  // 其他 courseId 的逻辑...
});

// 打开文档的方法
const openDocument = (url) => {
  if (url) {
    window.open(url, '_blank');
  } else {
    console.warn('文档 URL 未提供。');
  }
};
</script>

<style scoped>
.course-ware {
  padding-top: 60px; /* 与 Home.vue 保持一致的顶部填充 */
}

main {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.course-ware-section {
  margin-bottom: 4rem;
}

h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
}

.section-desc {
  color: #666;
  margin-bottom: 3rem;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.resource-list {
  display: flex;
  flex-direction: column; /* 纵向排列 */
  gap: 2rem; /* 卡片之间的间距 */
  align-items: flex-start; /* 左对齐卡片 */
}

.resource-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: left; /* Changed to left-align content within the card */
  width: 100%;
  /* Removed: max-width: 600px; */ /* Adjust max-width as needed for the wider content */
}

/* New styles for the re-developed resource card */
.resource-divider {
  width: 100%;
  height: 4px;
  background-color: #FF9800; /* Orange color for the line */
  margin-bottom: 2rem; /* Space below the line */
}

.resource-header {
  display: flex;
  align-items: flex-start; /* 将标题和描述顶部对齐 */
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.resource-title {
  background-color: #E3F2FD; /* Light blue background for the title */
  padding: 5px 15px;
  border-radius: 4px;
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
  display: inline-block;
  margin-right: 15px;
}

.resource-description {
  /* Removed: background-color: #E3F2FD; */ /* Remove background from description */
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  flex: 1;
}

.document-list {
  list-style: none;
  padding: 0;
  margin-top: 15px;
  display: flex; /* Make it a flex container */
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  gap: 15px; /* Add gap between items */
}

.document-list li {
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  text-decoration: underline;
}

.document-list li:hover {
  color: #007bff; /* Change color on hover */
}

/* Keep existing icon-wrapper styles if other cards still use it, otherwise remove or adapt */
.icon-wrapper {
  background-color: #E3F2FD;
  border-radius: 8px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 1.5rem auto;
  font-size: 3rem;
  color: #2196F3;
}
</style> 