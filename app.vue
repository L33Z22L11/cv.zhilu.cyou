<script setup lang="ts">
const {
    name = '刘**',
    phone = '133****9192',
} = useRuntimeConfig().public

useSeoMeta({
    title: `${name} - 前端开发实习`,
    description: `${name}的前端开发实习简历`,
    robots: 'noindex, nofollow',
})
</script>

<template>
    <article max-w="176" mx="auto" p="4" text="3.5" tracking="wide">
        <h1 text="center" m="be-2">
            {{ name }}
        </h1>

        <ul columns="sm:2" p="is-0">
            <InfoLi icon="ri:smartphone-line" label="电话">
                {{ phone }} (同微信)
            </InfoLi>

            <InfoLi icon="ri:mail-line" label="邮箱">
                <InfoLink to="mailto:hi@zhilu.cyou" />
            </InfoLi>

            <InfoLi icon="ri:github-fill" label="GitHub">
                <InfoLink to="https://github.com/L33Z22L11">
                    L33Z22L11
                </InfoLink>
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
                <li>掌握 Vue 3、Nuxt 3、TypeScript，熟练掌握响应式设计、UI/UX 优化</li>
                <li>具备 Sass、UnoCSS 等 CSS 预处理与原子化样式工程能力</li>
                <li>拥有 Linux 运维及计算机网络实践经验，掌握 Serverless 平台部署调优</li>
                <li>熟悉 Git 协作规范并持续参与 GitHub 开源项目</li>
                <li>善于运用 AI 工具提升开发效能，注重代码质量与兼容性实践</li>
            </ul>
        </InfoSection>

        <InfoSection title="项目经验">
            <Project
                name="blog-v3"
                desc="个人博客"
                role="创建者"
                link="https://github.com/L33Z22L11/blog-v3"
                from="2024.08"
                :techs="['Nuxt', 'Vue 3', 'TypeScript', 'Pinia', 'Scss']"
            >
                <ul>
                    <li>
                        在构建 SSG 静态站点过程中，通过最小复现成功定位 Nuxt 3 数据绑定异常问题，向 Nuxt 提交的
                        <InfoLink to="https://github.com/nuxt/nuxt/issues/30916">
                            Issue#30916
                        </InfoLink> 被采纳修复，推动框架迭代。
                    </li>
                    <li>
                        使用 MDC 语法在 Markdown 渲染 Vue 组件时发现 attrs 异常转义，通过最小复现检出异常 AST，提出
                        <InfoLink to="https://github.com/nuxt-modules/mdc/issues/296">
                            Issue#296
                        </InfoLink> 后解决。
                    </li>
                    <li>
                        通过 Google Search Console 监测发现境外繁体镜像站点，参阅 Whois、HTTP Header 等信息，定位到 Cloudflare 反代 + 域名替换的行为机制，开发出恶意反代跳转回原站的方案；同时排查 SEO 问题，最终达到月 PV 10K。
                    </li>
                </ul>
            </Project>

            <Project
                name="GioPic"
                desc="图床上传桌面程序"
                role="核心贡献者"
                link="https://github.com/isYangs/GioPic"
                from="2024.08"
                :techs="['Electron', 'Vue 3', 'TypeScript', 'Axios', 'UnoCSS', 'NaiveUI']"
            >
                <ul>
                    <li>解决跨平台启动问题，在 Mac OS 开发的项目在 Windows 上无法启动，通过查阅报错资料，修改构建脚本，实现多平台开发运行。</li>
                    <li>提升项目扩展性，针对适配 AWS / 第三方 OSS 存储源时代码扩展性差的问题，重构图床存储程序定义代码，实现第三方图床存储兼容。</li>
                    <li>优化图标显示，针对 Windows 托盘图标、Mac OS 图标比例异常问题，参考 Electron 文档、Apple Developer 文档及 Windows 注册表规范，使用原型设计工具绘制图标并调整逻辑，实现多系统、多颜色模式下托盘图标兼容。</li>
                </ul>
            </Project>

            <Project
                name="XiyouLinux"
                desc="实验室服务聚合"
                role="创建者"
                link="https://www.xiyoulinux.com"
                from="2024.03"
                to="至今"
                :techs="['VitePress', 'Nitro', 'Vue 3', 'TypeScript', 'VueUse', 'Mongoose']"
            >
                <ul>
                    <li>重构实验室门户页面并将培养计划构建为网站，降低维护成本，显著提升访问性能。</li>
                    <li>解决原群博项目资源占用高及 XSS 漏洞问题，使用 Nitro + Mongoose 构建前后端分离项目，提升安全性，内存占用降低 81%。</li>
                </ul>
            </Project>
        </InfoSection>

        <InfoSection title="个人证书">
            <ul>
                <li>CET-4、CET-6</li>
                <li>中国大学生计算机设计大赛西北赛区二等奖</li>
            </ul>
        </InfoSection>
    </article>
</template>
