# Focus Flow 初学者补全路径

## 使用方式
- 每次只做一关。
- 一关内遵循：阅读 -> 小改动 -> 运行验证 -> 补测试。
- 每关完成后在本文件勾选并写 2 句复盘。

## 阶段 A：读懂现有代码（不改业务）

### 关卡 1：任务数据流追踪
目标：完全读懂任务从输入到渲染的全过程。

操作步骤：
1. 打开 src/views/TasksView.jsx，找到 handleCreateTask。
2. 画出流程：标题输入 -> normalize -> 校验 -> 去重 -> createTask -> setTasks。
3. 在浏览器添加 1 个任务，观察列表变化。
4. 运行测试，确认现有行为没被破坏。

验收标准：
- 能口述 handleCreateTask、handleUpdateTask、visibleTasks 的作用。
- 能解释为什么已完成任务会在列表后面。
- 测试通过。

复盘记录：
- [ ] 已完成关卡 1
- 复盘：

### 关卡 2：番茄钟状态机
目标：读懂 usePomodoro 的状态切换。

操作步骤：
1. 打开 src/hooks/usePomodoro.js，阅读 mode、isRunning、secondsLeft、completedCycles。
2. 跟踪 start、pause、reset、skip 的状态变化。
3. 运行 usePomodoro 测试并查看断言。

验收标准：
- 能解释工作态结束后为什么 completedCycles +1。
- 能解释 reset 与 skip 的差异。

复盘记录：
- [ ] 已完成关卡 2
- 复盘：

### 关卡 3：设置联动
目标：理解 Context + LocalStorage 的联动。

操作步骤：
1. 阅读 src/contexts/AppSettingsContext.jsx。
2. 阅读 src/views/SettingsView.jsx 和 src/views/FocusView.jsx 中对设置的使用。
3. 在设置页修改分钟数，切到专注页验证生效。

验收标准：
- 能解释为什么刷新后设置仍然存在。
- 能说明 useLocalStorage 在这里承担什么职责。

复盘记录：
- [ ] 已完成关卡 3
- 复盘：

## 阶段 B：基础补全（小功能）

### 关卡 4：Button/Input 统一封装
涉及文件：
- src/components/base/Button.jsx
- src/components/base/Input.jsx
- src/styles/components.css

目标：支持统一样式类和变体。

### 关卡 5：主题切换真正生效
涉及文件：
- src/contexts/ThemeContext.jsx
- src/App.jsx
- src/styles/variables.css

目标：实现 light/dark 切换并写入本地存储。

### 关卡 6：Modal 接管危险操作确认
涉及文件：
- src/components/base/Modal.jsx
- src/views/TasksView.jsx

目标：替换 window.confirm 的清空全部任务确认。

## 阶段 C：业务增强（中等难度）

### 关卡 7：任务优先级
### 关卡 8：任务分类
### 关卡 9：番茄钟关联任务
### 关卡 10：完成提醒（音效/通知）

## 阶段 D：工程能力

### 关卡 11：导出 CSV/JSON
### 关卡 12：补齐关键测试

## 每关固定命令
开发：npm run dev
测试：npm run test:run

## 备注
- 原则：先让功能跑通，再整理代码。
- 原则：一次只改一个目标，减少排错成本。
