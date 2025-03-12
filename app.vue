<script setup lang="ts">
const { name, phone } = useRuntimeConfig().public
</script>

<template>
    <article max-w="172" mx="auto" p="4">
        <h1 text="center" m="be-2">
            {{ name || '刘' }}
        </h1>

        <ul columns="sm:2" p="is-0">
            <InfoLi icon="ri:smartphone-line" label="电话">
                {{ phone || '133****9192 (同微信)' }}
            </InfoLi>

            <InfoLi icon="ri:mail-line" label="邮箱">
                <InfoLink to="mailto:hi@zhilu.cyou" />
            </InfoLi>

            <InfoLi icon="ri:github-fill" label="GitHub">
                <InfoLink to="https://github.com/L33Z22L11" />
            </InfoLi>

            <InfoLi icon="ri:men-line" label="性别">
                男
            </InfoLi>

            <InfoLi icon="ri:school-line" label="学校">
                西安邮电大学 (计算机科学与技术)
            </InfoLi>

            <InfoLi icon="ri:graduation-cap-line" label="学历">
                本科在读 (2026 届)
            </InfoLi>
        </ul>

        <InfoSection title="个人技能">
            <ul>
                <li>掌握 Vue 3、Nuxt 3、TypeScript 等现代前端技术栈，精通响应式设计，注重 UI/UX</li>
                <li>熟悉 Sass、UnoCSS 等 CSS 预处理与原子化工具，善于打造美观的界面</li>
                <li>具备 Linux 运维能力，掌握计算机网络与操作系统知识，能有效定位与解决系统问题</li>
                <li>熟练使用 Git 工作流，注重代码与开源参与规范，活跃于 GitHub 开源社区</li>
                <li>熟悉 Vercel、Netlify 等 Serverless 平台，具备跨平台部署与优化能力</li>
                <li>擅长通过文档与 Issue 定位问题，注重开发体验与兼容性，乐于撰写技术文档</li>
            </ul>
        </InfoSection>

        <InfoSection title="项目经验">
            <Project
                name="blog-v3"
                desc="个人博客"
                link="https://blog.zhilu.cyou"
                from="2024.08"
                :techs="['Nuxt', 'Vue 3', 'TypeScript', 'Pinia', 'Scss', 'Iconify', 'ESLint', 'Stylelint']"
            >
                <ul>
                    <li>采用响应式设计，优化多个 CSS 特性以兼容不同设备，打造美观且交互友好的界面</li>
                    <li>重构项目构建流程，提升加载速度，协助上游依赖修复多项问题，贡献被社区认可</li>
                    <li>优化 SEO 表现，改进 Meta、OpenGraph 配置与 Feed 生成，网站月 PV 达 10K</li>
                    <li>实现跨平台 Serverless 部署方案，完善文档，项目被多人 fork 使用并获良好评价</li>
                </ul>
            </Project>

            <Project
                name="GioPic"
                desc="图床上传桌面程序"
                link="https://github.com/isYangs/GioPic"
                from="2024.08"
                :techs="['Electron', 'Vite', 'Vue 3', 'TypeScript', 'Pinia', 'SQLite', 'Axios', 'UnoCSS', 'NaiveUI']"
            >
                <ul>
                    <li>开发兰空图床/AWS/OSS 图床上传客户端，支持 Windows/Linux/MacOS 多平台使用</li>
                    <li>通过 GitHub 敏捷开发，协助作者重构项目，减少冗余代码</li>
                    <li>优化样式与界面布局，提升用户交互体验</li>
                </ul>
            </Project>

            <Project
                name="XiyouLinux"
                desc="实验室服务聚合"
                link="https://www.xiyoulinux.com"
                from="2024.03"
                to="至今"
                :techs="['VitePress', 'Nitro', 'Vue 3', 'TypeScript', 'VueUse', 'MongoDB', 'Prettier']"
            >
                <ul>
                    <li>重构实验室门户页面，采用 VitePress 实现前后端分离，降低维护成本，提升访问性能</li>
                    <li>用 Nitro (Node.js) + MongoDB 替换原有的 Java + Selenium + Thymeleaf + MySQL 架构，彻底解决博客聚合服务频繁卡顿与崩溃问题</li>
                    <li>采用 Next.js、Nextra、TailwindCSS 构建培养计划文档，界面美观，便于查阅、更新</li>
                </ul>
            </Project>
        </InfoSection>

        <InfoSection title="个人证书">
            <ul>
                <li>CET-4、CET-6</li>
                <li>中国大学生计算机设计大赛西北赛区二等奖</li>
            </ul>
        </InfoSection>

        <InfoSection title="自我评价">
            <ul>
                <li>热爱前端开发，具备扎实的技术基础与良好的代码习惯</li>
                <li>关注用户体验，追求代码质量，擅长用技术落地解决方案</li>
                <li>积极参与开源社区，乐于分享与学习新技术</li>
            </ul>
        </InfoSection>
    </article>
</template>
