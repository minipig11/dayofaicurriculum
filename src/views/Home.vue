<template>
  <div class="home">
    <main>
      <!-- AI基础板块 -->
      <section class="ai-basics">
        <h2>AI 素养基础</h2>
        <p class="section-desc">适合初级和中学生学习的基础 AI 系列课程，以简单且针对性强的项目为切入点，帮你零基础入门人工智能时代。</p>
        <div class="course-grid">
          <CourseCard title="面向小学低年级的 AI" type="basic" level="初级" ageRange="(5-7 岁)" description="2025 年更新！面向年轻学习者的一系列介绍活动" courseWareId="ai_basic" @viewCourseWare="viewCourseWare">
            <div class="sub-items">
              <div class="sub-item">
                <span>1. 什么是AI？</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('ai_basic', 'ai_basic_1')">开始学习</button>
                </div>
              </div>
            </div>
          </CourseCard>
          <CourseCard 
            title="什么是 AI?" 
            type="basic"
            level="初级"
            ageRange="(8-18 岁)"
            description="新：低年级和高年级活动！介绍 AI 是什么及其工作原理"
            courseWareId="basic_what_is_ai" @viewCourseWare="viewCourseWare"
          >
            <div class="sub-items">
              <div class="sub-item">
                <span>1. 什么是AI？</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('basic_what_is_ai', 'basic_what_is_ai_1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>2. 机器如何学习（简介）</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('basic_what_is_ai', 'basic_what_is_ai_1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>3. 什么是算法</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('basic_what_is_ai', 'basic_what_is_ai_1')">开始学习</button>
                </div>
              </div>
            </div>
          </CourseCard>
          <CourseCard 
            title="机器如何学习？" 
            type="basic"
            level="初级"
            ageRange="(8-18 岁)"
            description="更新于 2024 年 12月！学生将发现生成式AI 如何创新内容，并掌究其技术及其道德影响"
            courseWareId="basic_machine_learning" @viewCourseWare="viewCourseWare"
          >
            <div class="sub-items">
              <div class="sub-item">
                <span>1. 可教机器</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('basic_machine_learning', 'basic_machine_learning_1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>2. AI中的偏见</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('basic_machine_learning', 'basic_machine_learning_1')">开始学习</button>
                </div>
              </div>
            </div>
          </CourseCard>
          <CourseCard 
            title="机器如何创建？" 
            type="basic"
            level="初级"
            ageRange="(8-18 岁)"
            description="更新于 2024 年 12月！学生将发现生成式AI 如何创新内容，并掌究其技术及其道德影响"
            courseWareId="basic_gen_ai" @viewCourseWare="viewCourseWare"
          >
            <div class="sub-items">
              <div class="sub-item">
                <span>1. 什么是生成式 AI？</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('basic_gen_ai', 'basic_gen_ai_1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>2. 使用AI生成图像</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('basic_gen_ai', 'basic_gen_ai_1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>3. 深度伪造</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('basic_gen_ai', 'basic_gen_ai_1')">开始学习</button>
                </div>
              </div>
            </div>
          </CourseCard>
          <CourseCard 
            title="AI 与伦理" 
            type="basic"
            level="初级"
            ageRange="(10-18 岁)"
            description="学办 AI 道德伦理选修课 AI 作为进阶的教材！（这些活动可以按任何顺序教授）"
            :isGrayText="true"
            courseWareId="basic_ethics" @viewCourseWare="viewCourseWare"
          >
            <div class="sub-items">
              <div class="sub-item">
                <span>1. AI 伦理辩论材料</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('basic_ethics', 'basic_ethics_1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>2. 合乎道德的使用AI探索</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('basic_ethics', 'basic_ethics_2')">开始学习</button>
                </div>
              </div>
            </div>
          </CourseCard>
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
            courseWareId="art_ai" @viewCourseWare="viewCourseWare"
          >
            <div class="sub-items">
              <div class="sub-item" style="color: #666;">
                <span>1. 人工智能和创意艺术 (5-11 岁)</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('art_ai', 'art_ai_1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>2. 人工智能和创意活动 (12-18 岁)</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('art_ai', 'art_ai_1')">开始学习</button>
                </div>
              </div>
            </div>
          </CourseCard>

          <CourseCard 
            title="机器人背后的大脑：聊天机器人、偏见和儿童 AI 的创意创新" 
            type="application"
            level="中级"
            ageRange="(12 岁及以上)"
            description="*2025 年新版！"
            :isGrayText="true"
            courseWareId="app_chatbot" @viewCourseWare="viewCourseWare"
          >
            <div class="sub-items">
              <div class="sub-item">
                <span>1. 什么是聊天机器人, 他们是如何工作的</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('app_chatbot', 'app_chatbot_1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>2. 探索聊天机器人中的偏见</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('app_chatbot', 'app_chatbot_2')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>3. 创建你自己的机器人对话</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('app_chatbot', 'app_chatbot_3')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>4. 创建我们的课堂AI使用规范</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('app_chatbot', 'app_chatbot_4')">开始学习</button>
                </div>
              </div>
            </div>
          </CourseCard>

          <CourseCard 
            title="使用 AI 发现创造力" 
            type="application"
            level="中级"
            ageRange="(8-10 岁)"
            description="为年轻学习者学习 AI 和创造力的第一套课程！"
            courseWareId="app_creativity" @viewCourseWare="viewCourseWare"
          >
            <div class="sub-items">
              <div class="sub-item">
                <span>1. 什么是创造力</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('app_creativity', 'Using AI for Creativity')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>2. 我们是否像AI一样思考</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('app_creativity', 'What is Creativity-Slides')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>3. 创造性的使用AI时,编写清晰的说明</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('app_creativity', 'Do We Think Like AI')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>4. Yarn类项目</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('app_creativity', 'Yarn Class Project')">开始学习</button>
                </div>
              </div>
            </div>
          </CourseCard>

          <CourseCard 
            title="学校中的 ChatGPT" 
            type="application"
            level="中级"
            ageRange="(8-18 岁)"
            description="ChatGPT 背后介绍关于如何在学校使用的讨论"
            courseWareId="app_chatgpt" @viewCourseWare="viewCourseWare"
          >
            <div class="sub-items">
              <div class="sub-item">
                <span>1. 创作过程</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('app_chatgpt', 'app_chatgpt_1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>2. ChatGPT 是如何工作的？</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('app_chatgpt', 'app_chatgpt_1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>3. ChatGPT: 好或坏</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('app_chatgpt', 'app_chatgpt_1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>4. 展示</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('app_chatgpt', 'app_chatgpt_1')">开始学习</button>
                </div>
              </div>
            </div>
          </CourseCard>

          <CourseCard 
            title="AI 和AI工具如何影响我们的权利?" 
            type="application"
            level="中级"
            ageRange="(8-18 岁)"
            description="一系列公民课程，探讨人工智能如何影响社会权利的影响"
            :isGrayText="true"
            courseWareId="rights_ai" @viewCourseWare="viewCourseWare"
          >
            <div class="sub-items">
              <div class="sub-item">
                <span>1. 人权和特权</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('rights_ai', '1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>2. 权力如何随着时间的推移而演变</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('rights_ai', '2')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>3. 算法和判别</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('rights_ai', '3')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>4. 技术和隐私</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('rights_ai', '4')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>5. 广告和透明度</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('rights_ai', '5')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>6. 设计安全系统</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('rights_ai', '6')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>7. 权力和人工智能的使用</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('rights_ai', '7')">开始学习</button>
                </div>
              </div>
            </div>
          </CourseCard>

          <CourseCard 
            title="学校的 AI 工具：为年轻人定制课程" 
            type="application"
            level="中级"
            ageRange="(10-18 岁)"
            description="关于在社交媒体中使用人工智能的新发现及其影响的一系列研究实践训"
            :isGrayText="true"
            courseWareId="school_ai_tools" @viewCourseWare="viewCourseWare"
          >
            <div class="sub-items">
              <div class="sub-item">
                <span>1. 现行校规</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('school_ai_tools', '1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>2. 创作过程</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('school_ai_tools', '2')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>3. 聊天机器人和大语言模型</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('school_ai_tools', '3')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>4. 我们今天生活中的人工智能</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('school_ai_tools', '4')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>5. 使用AI的道德考虑</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('school_ai_tools', '5')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>6. 人工智能在学校</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('school_ai_tools', '6')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>7. 立法和法案:美国法律是如何制定的</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('school_ai_tools', '7')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>8. 编写自己的AI法案</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('school_ai_tools', '8')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>9. 建立共识</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('school_ai_tools', '9')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>10. AI法案修正案</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('school_ai_tools', '10')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>11. AI法案提案准备</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('school_ai_tools', '11')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>12. 出示您的AI账单</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('school_ai_tools', '12')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>13. (可选)共享您的AI账单)</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('school_ai_tools', '13')">开始学习</button>
                </div>
              </div>
            </div>
          </CourseCard>

          <CourseCard 
            title="了解社交媒体中的 AI" 
            type="application"
            level="中级"
            ageRange="(10-18 岁)"
            description="关于在社交媒体中使用人工智能的新发现及其影响的一系列研究实践"
            courseWareId="social_media_ai" @viewCourseWare="viewCourseWare"
          >
            <div class="sub-items">
              <div class="sub-item">
                <span>1. 推荐系统</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('social_media_ai', 'recommand system')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>2. 是真的吗？</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('social_media_ai', 'It is true')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>3. 社交媒体网站</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('social_media_ai', 'Socal Media')">开始学习</button>
                </div>
              </div>
            </div>
          </CourseCard>
        </div>
      </section>

      <!-- 超越AI素养板块 -->
      <section class="ai-advanced">
        <h2>超越 AI 素养 - Python编程课程</h2>
        <p class="section-desc">使用Python编程教授人工智能的课程。</p>
        <div class="course-grid">
          <CourseCard 
            title="AI如何量化我们(带编程)" 
            type="advanced"
            level="高级"
            ageRange="(14-18 岁)"
            description="适合数据科学思考 - 使用编码 Python 进行数据"
            courseWareId="advanced_data_activism" @viewCourseWare="viewCourseWare"
          >
            <div class="sub-items">
              <div class="sub-item">
                <span>1. 数据行动主义介绍</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('advanced_data_activism', 'advanced_data_activism_1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>2. Python 简介 Part1</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('advanced_python_intro', 'advanced_python_intro_1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>3. Python 简介 Part2</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('advanced_python_intro', 'advanced_python_intro_2')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>4. 雏菊模型</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('advanced_daisy_model', 'advanced_daisy_model_1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>5. Google表格中的数据</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('advanced_google_sheets', 'advanced_google_sheets_1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>6. 可视化数据</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('advanced_data_visualization', 'advanced_data_visualization_1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>7. 数据图纸</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('advanced_data_drawing', 'advanced_data_drawing_1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>8. 数据的力量和数据行动主义</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('advanced_data_power', 'advanced_data_power_1')">开始学习</button>
                </div>
              </div>
            </div>
          </CourseCard>

          <CourseCard 
            title="用数据讲述气候故事" 
            type="advanced"
            level="高级"
            ageRange="(8-18 岁)"
            description=""
            courseWareId="climate_story" @viewCourseWare="viewCourseWare"
          >
            <div class="sub-items">
              <div class="sub-item">
                <span>1. 数据即叙述</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('climate_story', 'climate_story_1')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>2. 使用python探索数据</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('climate_story', 'climate_story_2')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>3. 使用python可视化数据</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('climate_story', 'climate_story_3')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>4. 使用机器学习预测趋势</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('climate_story', 'climate_story_4')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>5. 独立数据分析项目</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('climate_story', 'climate_story_5')">开始学习</button>
                </div>
              </div>
              <div class="sub-item">
                <span>6. 讲述气候故事</span>
                <div class="btn-group">
                  <button class="btn-learn" @click="startPlay('climate_story', 'climate_story_6')">开始学习</button>
                </div>
              </div>
            </div>
          </CourseCard>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// filepath: /d:/code_repository_2/DayOfAI/day-of-ai-page/src/views/Home.vue
import { useRoute, useRouter } from 'vue-router'
import CourseCard from '../components/CourseCard.vue'

// 路由对象
const route = useRoute()
const router = useRouter()

// 开始学习
const startPlay = (courseId,chapterId) => {
  console.log('开始学习:', courseId,chapterId)
  try {
    router.push({
      path: '/CoursePlay',
      query: {
        courseId: courseId,
        chapterId: chapterId
      }
    }).catch(err => {
      console.error('路由跳转失败:', err)
    })
  } catch (error) {
    console.error('跳转异常:', error)
  }
}

// 查看课程资料
const viewCourseWare = (courseId) => {
  console.log('查看课程资料:', courseId)
  try {
    router.push({
      path: '/CourseWare',
      query: {
        courseId: courseId
      }
    }).catch(err => {
      console.error('路由跳转失败:', err)
    })
  } catch (error) {
    console.error('跳转异常:', error)
  }
}
</script>

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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

/* 添加课程卡片背景颜色样式 */
:deep(.course-card) {
  position: relative;
}

:deep(.course-card[data-type="basic"]) {
  background-color: #E3F2FD; /* 浅蓝色背景用于基础课程 */
}

:deep(.course-card[data-type="application"]) {
  background-color: #E8F5E9; /* 浅绿色背景用于应用课程 */
}

:deep(.course-card[data-type="advanced"]) {
  background-color: #FFF3E0; /* 浅橙色背景用于高级课程 */
}

.sub-items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
}

/* 修改现有的 .sub-item 样式 */
.sub-item {
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  font-size: 0.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-group {
  display: flex;
  gap: 10px; /* 控制按钮之间的间距 */
}

.btn-learn {
  margin: 0;
  width: 100px; /* 调整宽度 */
  height: 35px; /* 调整高度 */
  line-height: 35px; /* 调整行高以垂直居中文本 */
  border: 0px;
  outline: none;
  color: #fff;
  background: #388fff;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.95rem; /* 调整字体大小 */
}

.btn-learn:hover {
  background: #1565C0;
}

.ai-basics {
  position: relative;
  padding-top: 160px; /* 减少顶部填充 */
  margin-top: -60px; /* 抵消 home 的 padding-top */
}

.ai-basics::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 140px; /* 减少背景图片高度 */
  background-image: url('../assets/dayofai(1).png'); /* 替换为实际图片路径 */
  background-size: cover;
  background-position: top center; /* 修改为从顶部开始显示图片 */
  background-repeat: no-repeat;
  border-radius: 12px;
  margin: 0; /* 移除所有边距 */
}

.ai-basics h2 {
  position: relative;
  z-index: 1; /* 确保文字在背景图片上层 */
  margin-top: 40px; /* 添加标题上方间距 */
}

.ai-basics .section-desc {
  position: relative;
  z-index: 1; /* 确保文字在背景图片上层 */
  margin-bottom: 30px; /* 添加描述文字下方间距 */
}
</style>