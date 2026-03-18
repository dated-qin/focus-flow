# FocusFlow

一个面向 React 初学者的练手项目，核心目标是把「任务管理 + 番茄钟专注 + 数据统计」做成完整闭环。

## 功能概览

- 任务管理
- 新增、编辑、删除、勾选完成
- 截止日期与逾期提示
- 过滤（全部 / 进行中 / 已完成）
- 批量操作（全部完成、清除已完成、清空全部）
- 专注计时（番茄钟）
- 专注/休息阶段切换
- 开始、暂停、重置、跳过
- 完成专注轮次计数
- 统计页面
- 今日专注次数
- 活跃任务数
- 连续专注天数
- 近 7 天专注次数图
- 设置页面
- 专注时长与休息时长可配置
- 配置持久化到 LocalStorage

## 技术栈

- React 18
- React Router 6
- Vite 5
- 原生 CSS（无 UI 框架）
- LocalStorage 持久化

## 项目结构（核心）

```text
src/
  components/
    tasks/       # 任务模块 UI
    focus/       # 专注计时 UI
    analytics/   # 统计模块 UI
  contexts/      # Theme / AppSettings 全局状态
  hooks/         # useTasks / usePomodoro / useLocalStorage
  lib/           # 日期与任务工具函数
  routes/        # 路由入口
  views/         # Tasks / Focus / Stats / Settings 页面
  styles/        # 全局样式与组件样式
```

## 本地运行

```bash
npm install
npm run dev
```

打开浏览器访问本地 Vite 地址（通常是 `http://localhost:5173`）。

## 构建与预览

```bash
npm run build
npm run preview
```

## 测试

```bash
npm run test
```

单次执行：

```bash
npm run test:run
```

## 练习目标与收获

- 理解 React 组件拆分与状态提升
- 掌握受控表单、列表渲染与事件处理
- 学会通过自定义 Hook 复用逻辑
- 理解 LocalStorage 持久化在前端项目中的使用方式
- 完成多页面路由与页面间数据联动

## 下一步计划

- 为核心逻辑补充单元测试（taskHelpers / usePomodoro）
- 抽离文案常量，便于后续国际化
- 增加数据导入/导出能力
- 优化可访问性与键盘操作体验
