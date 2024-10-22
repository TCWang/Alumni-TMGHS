<template>
  <nav class="bg-indigo-800 text-white">
    <div class="container mx-auto px-4 md:flex items-center gap-6">
      <!-- Logo -->
      <div class="flex items-center justify-between md:w-auto w-full">
        <a href="/" class="flex items-center py-2 px-1 text-white flex-1">
          <span class="font-bold text-xl text-yellow-400">市女中</span>
        </a>
        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMobileMenu" class="mobile-menu-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>bars-3-bottom-left</title>
              <g fill="none">
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <!-- Primary Navigation -->
      <div
        :class="{
          hidden: !mobileMenuOpen,
          block: mobileMenuOpen,
          'md:flex': true,
        }"
        class="md:flex-row flex-col items-center justify-start md:space-x-1 navigation-menu pb-3 md:pb-0"
      >
        <!-- Dropdown Menu -->
        <div class="relative" v-for="(item, index) in menuItems" :key="index">
          <button
            @click="toggleDropdown(index)"
            class="dropdown-toggle py-2 px-3 hover:bg-indigo-500 flex items-center gap-2 rounded"
          >
            <span class="pointer-events-none">{{ item.name }}</span>
            <svg
              class="w-3 h-3 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>chevron-down</title>
              <g fill="none">
                <path
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </button>
          <div
            v-if="item.open"
            class="dropdown-menu absolute bg-indigo-500 text-white rounded-b-lg pb-2 w-64 z-10"
          >
            <a
              v-for="(submenu, i) in item.submenu"
              :key="i"
              :href="submenu.link"
              class="block pl-4 md:pl-4 pr-2 py-2 hover:bg-indigo-800 text-white"
              >{{ submenu.name }}</a
            >
          </div>
        </div>

        <!-- Single Page -->
        <a class="py-2 px-3 block text-white" href="/personal">同學錄</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
      menuItems: [
        {
          name: "1964同學會",
          open: false,
          submenu: [
            { name: "60週年感言", link: "/album/alb1" },
            { name: "校園回顧", link: "/album/alb2" },
            { name: "畢業相冊", link: "/album/alb3" },
          ],
        },
        {
          name: "60週年重聚會",
          open: false,
          submenu: [
            { name: "團體群像", link: "/anniversary/ann1" },
            { name: "班級個照", link: "/anniversary/ann2" },
            { name: "工作人員", link: "/anniversary/ann3" },
            { name: "表演節目", link: "/anniversary/ann4" },
          ],
        },
        {
          name: "班級專刊",
          open: false,
          submenu: [
            { name: "1964級1-5班", link: "/class/class1" },
            { name: "1964級6-10班", link: "/class/class2" },
            { name: "1964級11-17班", link: "/class/class3" },
            { name: "總召及執行長專輯", link: "/class/class4" },
          ],
        },
        {
          name: "個人聚會回憶",
          open: false,
          submenu: [
            { name: "個人沙龍", link: "/personal/per1" },
            { name: "大龍蝦餐廳", link: "/personal/per2" },
            { name: "美食回憶", link: "/personal/per3" },
          ],
        },
      ],
    };
  },
  methods: {
    toggleDropdown(index) {
      this.menuItems.forEach((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
      });
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Ensure dropdown menu covers subsequent items in mobile mode */
.dropdown-menu {
  z-index: 10;
}
@media (max-width: 767px) {
  .dropdown-menu {
    position: static;
  }
  .dropdown-menu a {
    padding-left: 2rem; /* Adjust padding as needed */
  }
  .navigation-menu a {
    padding-left: 0.8rem; /* Align all items including StudyGroup */
  }
}
</style>
