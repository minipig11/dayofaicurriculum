<template>
  <div class="home">
    <NavBar />
    <main>
      <!-- AI基础板块 -->
      <section class="ai-basics">
        <h2>AI 素养基础</h2>
        <p class="section-desc">适合初级和中学生学习的基础 AI 系列课程，以简单且针对性强的项目为切入点，帮你零基础入门人工智能时代。</p>
        <div class="course-grid">
          <CourseCard 
            title="面向小学低年级的 AI" 
            type="basic"
            level="初级"
            ageRange="(5-7 岁)"
            description="2025 年更新！面向年轻学习者的一系列介绍活动"
          />
          <CourseCard 
            title="什么是 AI?" 
            type="basic"
            level="初级"
            ageRange="(8-18 岁)"
            description="新：低年级和高年级活动！介绍 AI 是什么及其工作原理"
          />
          <CourseCard 
            title="机器如何创建？" 
            type="basic"
            level="初级"
            ageRange="(8-18 岁)"
            description="更新于 2024 年 12月！学生将发现生成式AI 如何创新内容，并掌究其技术及其道德影响"
          />
          <CourseCard 
            title="AI 与伦理" 
            type="basic"
            level="初级"
            ageRange="(10-18 岁)"
            description="学办 AI 道德伦理选修课 AI 作为进阶的教材！（这些活动可以按任何顺序教授）"
          />
        </div>
      </section>

      <!-- AI应用板块 -->
      <section class="ai-applications">
        <h2>AI 应用</h2>
        <p class="section-desc">这些单元包含在课堂上实际运用 AI 系列课程，并让他们进一步学会如何融合 AI 工具进行创新。</p>
        <div class="course-grid">
          <CourseCard 
            title="AI 和创意艺术" 
            type="application"
            level="中级"
            ageRange="(8 岁及以上)"
            description="*2025 年新版！"
          />
          <CourseCard 
            title="机器人背后的大脑：聊天机器人、偏见和儿童 AI 的高效使用" 
            type="application"
            level="中级"
            ageRange="(12 岁及以上)"
            description="*2025 年新版！"
          />
          <CourseCard 
            title="使用 AI 实现创造力" 
            type="application"
            level="中级"
            ageRange="(8-10 岁)"
            description="为年轻学习者学习 AI 和创造力的第一套课程！"
          />
          <CourseCard 
            title="学校中的 ChatGPT" 
            type="application"
            level="中级"
            ageRange="(8-18 岁)"
            description="ChatGPT 背介绍关于如何在学校使用的讨论"
          />
          <CourseCard 
            title="AI 和 AI 工具如何影响我们的权利?" 
            type="application"
            level="中级"
            ageRange="(8-18 岁)"
            description="一系列公民课程，探讨人工智能如何影响社会权利的影响"
          />
          <CourseCard 
            title="了解社交媒体中的 AI" 
            type="application"
            level="中级"
            ageRange="(10-18 岁)"
            description="关于在社交媒体中使用人工智能的新发现及其影响的一系列研究实践训"
          />
        </div>
      </section>

      <!-- 超越AI素养板块 -->
      <section class="ai-advanced">
        <h2>超越 AI 素养</h2>
        <p class="section-desc">这些单元旨在让学生深入理解 AI 系统之外的内容，并且可以掌握更深化的知识。</p>
        <div class="course-grid">
          <CourseCard 
            title="AI 如何呈化我们?" 
            type="advanced"
            level="高级"
            ageRange="(13-18 岁)"
            description="有关 AI 如何改变和影响我们的定深入课程"
          />
          <CourseCard 
            title="带积木的 AI 编程课程" 
            type="advanced"
            level="高级"
            ageRange="(8-18 岁)"
            description="在 AppInventor 或 MIT RAISE 和 AI Playground 中使用编码创造 AI 的课程"
          />
          <CourseCard 
            title="Python AI 编程课程" 
            type="advanced"
            level="高级"
            ageRange="(14-18 岁)"
            description="在 Python 中使用编码探索 AI 的课程"
          />
          <CourseCard 
            title="我们可以信任 AI 吗?" 
            type="advanced"
            level="高级"
            ageRange="(12-18 岁)"
            description="关于 AI 的可信性和可解释性以及这对世界的影响的课程"
          />
          <CourseCard 
            title="了解周围的环境" 
            type="advanced"
            level="高级"
            ageRange="(8-18 岁)"
            description="关于数据科学和不确定性的条例课程"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.home {
  padding-top: 60px;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

section {
  margin-bottom: 4rem;
}

h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.section-desc {
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

:deep(.course-card[data-type="advanced"]) {
  background: linear-gradient(135deg, #9C27B0 0%, #673AB7 100%);
  color: white;
}

:deep(.course-card[data-type="advanced"] h3) {
  color: white;
}

:deep(.course-card[data-type="advanced"] p) {
  color: rgba(255, 255, 255, 0.9);
}
</style>