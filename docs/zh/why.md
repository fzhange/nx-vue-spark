# 为什么要选择 NX?

这篇文章看起来更像是 NX 的科普文。如果你不太清楚 NX，那么这里很适合你。如果你想了解更多关于 NX 的能力，那么可以去官网上探索更多关于 NX 的能力。

我们将从以下几个方面来介绍 NX

## Nx 是什么？

Nx 是一个开源的构建系统。主要有下面一些特点。

- **Run Tasks Efficiently**。NX 并行运行任务，并根据其依赖关系顺序执行任务。
- **Cache Locally & Remotely**。通过本地和远程缓存能力，NX 能够阻止无效任务的重复运行，节省你的开发与构建时间。
- **Automate Dependency Updates**。如果我们在使用 Nx 的一些插件，那么我们将获得一些额外的能力，比如**代码自动生成**，利用工具**自主 dependencies 更新与 Codebase 更新**
- **Make it Your Own**。Nx 拥有高度自定义与扩展的能力。只需要针对项目微调，便可定制出你想要的效果。

目前 Nx 几乎涵盖了所有前端相关的技术栈同时国外的很多大厂都在使用。一图胜千言
![](https://s1.imagehub.cc/images/2024/03/13/7bc755e462656e8c4763e6a29280a512.png)
![](https://s1.imagehub.cc/images/2024/03/13/d8d7ca2aa7c85c18e646845e922d806a.png)

## Nx Vs Turbo

首先 Nx 和 Turbo 都是非常优秀的构建工具。
但是一个重要的问题是，当我在开发这个 repo 的时候，TurboPack 暂时还没有对 Vue 提供开箱即用的支持。后期我们会针对 Turbo 新建一个独立的 template.
[![8d6890ac9e4d22acba1aeb5eba3c8f1f.png](https://s1.imagehub.cc/images/2024/03/13/8d6890ac9e4d22acba1aeb5eba3c8f1f.png)](https://www.imagehub.cc/image/1zJkUT)

同时针对该问题 Reddit 之前在社区里也有过一些讨论。下面我会把链接贴出来。这里是一些主要观点针对 NX 和 Turbo
**使用 NX 的原因**

- Nx 是由前 Google 员工开发的构建系统，利用了 Google 内部工具使用的许多技术。
- 如果你之前在使用 Lerna,Lerna 现在已经被 NX 收购了。所以从 Lerna 迁移到 NX 是非常顺滑的
- 随着时间的推移，你的项目越来越大，有越来越多的 libs 存在在你的项目中。你需要一个标准的流程去生成管理你的库。将他们连接到一起，以便于你管理部署。
- 你的 monorepo 已经很复杂了，需要一个固定的结构和一个可视化的能力去帮助你各个模块之间的关系。
- plugins 超级丰富
- Nx 有很多大公司在使用，所以它会一直维下去。

**使用 Turborepo 的原因**

- 简单
- 需要与常见的 CI/CD 平台简单的缓存集成
- 已经被锁定在 Vercel 生态系统中
- Vercel 在 FB/META 的 React 团队得到了直接的支持。所以它也不会 die

一些相关的文章，仅供参考。

- [NX vs Turborepo? Concerned about betting on either
  ](https://www.reddit.com/r/reactjs/comments/yhzf3f/nx_vs_turborepo_concerned_about_betting_on_either/)
- [Nx vs Turborepo，怎麼在大型 Monorepo 優化開發體驗](https://medium.com/dcardlab/nx-vs-turborepo-%E6%80%8E%E9%BA%BC%E5%9C%A8%E5%A4%A7%E5%9E%8B-monorepo-%E5%84%AA%E5%8C%96%E9%96%8B%E7%99%BC%E9%AB%94%E9%A9%97-3354ff78a0cf)
