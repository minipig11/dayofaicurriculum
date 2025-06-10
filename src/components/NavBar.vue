<template>
  <nav class="nav-wrapper">
    <div class="nav-content">
      <div class="nav-left">
        <router-link to="/" class="logo">
          <img src="../assets/logo.svg" alt="Day of AI Logo">
        </router-link>
        
        <div class="nav-links">
          <div class="nav-item">
            <span>Teachers <i class="fas fa-angle-down"></i></span>
          </div>
          <div class="nav-item">
            <span>School Administrators <i class="fas fa-angle-down"></i></span>
          </div>
          <div class="nav-item">
            <span>international <i class="fas fa-angle-down"></i></span>
          </div>
          <div class="nav-item">
            <span>partners <i class="fas fa-angle-down"></i></span>
          </div>
          <div class="nav-item">
            <span>About Us <i class="fas fa-angle-down"></i></span>
          </div>
          <div class="nav-item">
            <span>contact <i class="fas fa-angle-down"></i></span>
          </div>
          <!-- router-link to="/international" class="nav-item">International</router-link>
          <router-link to="/partners" class="nav-item">Partners</router-link>
          <router-link to="/contact" class="nav-item">Contact Us</router-link -->
        </div>
      </div>

      <!-- div class="nav-right">
        <div class="search-box">
          <input type="text" placeholder="Search...">
          <i class="fas fa-search"></i>
        </div>
        <div class="translate">
          <span>Translate »</span>
        </div>
        <button class="register-btn">REGISTER</button>
      </div -->
    </div>
  </nav>
</template>

<style scoped>
.nav-wrapper {
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-start; /* 改为左对齐 */
  align-items: center;
  gap: 2rem;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 3rem;
  /* 移除 flex: 1 */
}

.logo img {
  height: 40px;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
  /* 移除 justify-content: center 和 flex: 1 */
}

.nav-item {
  color: #333333;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-item:hover {
  color: #2c5282;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 2rem;
  min-width: max-content; /* 防止右侧内容被挤压 */
}

.search-box {
  position: relative;
}

.search-box input {
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  width: 200px;
}

.search-box i {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #718096;
}

.translate {
  color: #2b6cb0;
  cursor: pointer;
}

.register-btn {
  background: #48bb78;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.register-btn:hover {
  background: #38a169;
}
</style>

<script>
export default {
  name: 'NavBar'
}
</script>