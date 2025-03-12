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
                本科在读 (2026届)
            </InfoLi>
        </ul>

        <InfoSection title="个人技能">
            <ul>
                <li>掌握Vue 3、Nuxt 3、TypeScript等现代前端技术栈</li>
                <li>精通响应式设计，注重UI/UX，掌握Sass CSS预处理器、UnoCSS等原子框架</li>
                <li>熟练使用Linux系统，具有Linux运维能力，掌握计算机网络、操作系统知识</li>
                <li>熟练使用Git，注重代码/提交记录/开源参与规范，活跃于GitHub开源社区</li>
                <li>熟悉Vercel、Netlify等Serverless平台，对新技术有强烈兴趣并持续学习</li>
                <li>注重代码规范、开发体验与兼容性，熟练通过文档、Issue解决问题，擅长撰写文档</li>
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
                    <li>注重响应式设计，界面美观且交互友好</li>
                    <li>积极参与上游依赖互动，帮助发现并解决多个问题</li>
                    <li>通过代码规范与工具确保代码质量</li>
                    <li>注重SEO，月PV达10K，项目被多人fork使用并获良好评价</li>
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
                    <li>开发兰空图床/AWS/OSS图床上传客户端，支持Windows/Linux/MacOS多平台使用</li>
                    <li>通过GitHub敏捷开发，协助作者重构项目，减少冗余代码</li>
                    <li>优化样式与界面布局，提升用户交互体验</li>
                    <li>通过代码重构与优化，提升项目可维护性与性能</li>
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
                    <li>门户页面通过VitePress构建前后端分离的站点，性能需求低，易于实验室成员维护</li>
                    <li>博客聚合服务使用Nitro构建基于Node.js的API，数据存储在MongoDB的Docker实例中</li>
                    <li>培养计划文档使用Next.js、Nextra、TailwindCSS构建，样式美观</li>
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
                <li>注重用户体验与代码质量，擅长通过技术解决实际问题</li>
                <li>积极参与开源社区，乐于分享与学习新技术</li>
            </ul>
        </InfoSection>
    </article>
</template>
