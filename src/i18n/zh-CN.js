export const zhCN = {
  nav: {
    tasks: "任务",
    stats: "统计",
    focus: "专注",
    settings: "设置"
  },
  tasks: {
    title: "任务",
    subtitle: "把想做的事拆成可执行的小步骤，并持续推进。",
    placeholder: "写下下一件要完成的事",
    add: "添加任务",
    confirmClearAll: "确认清空全部任务吗？该操作不可撤销。",
    empty: "还没有任务，先添加一条开始吧。",
    summary: {
      total: "全部",
      active: "进行中",
      done: "已完成"
    },
    filters: {
      all: "全部",
      active: "进行中",
      done: "已完成"
    },
    actions: {
      markAllActive: "全部设为进行中",
      markAllDone: "全部设为已完成",
      clearDone: "清除已完成",
      clearAll: "清空全部",
      edit: "编辑",
      save: "保存修改",
      cancel: "放弃修改",
      delete: "删除"
    },
    due: {
      overdue: "已逾期",
      due: "截止于"
    },
    aria: {
      title: "任务标题",
      dueDate: "任务截止日期",
      editTitle: "编辑任务标题",
      editDueDate: "编辑任务截止日期"
    },
    errors: {
      invalidDueDate: "截止日期格式无效。",
      duplicate: "任务已存在。",
      invalidTitleLength: (max) => `任务标题长度需为 1-${max} 个字符。`
    }
  },
  focus: {
    title: "专注模式",
    subtitle: "开始一个番茄钟，让注意力回到当下。",
    modeWork: "当前阶段：专注",
    modeBreak: "当前阶段：休息",
    controls: {
      start: "开始专注",
      pause: "暂停计时",
      reset: "重置本轮",
      skip: "下一阶段"
    },
    card: {
      work: "专注时长",
      break: "休息时长",
      cycles: "已完成专注轮次"
    },
    unitMinute: "分钟",
    fallbackQuote: "保持节奏，专注每一个当下。",
    quotes: [
      "保持专注，每天进步一点。",
      "先完成，再完美。",
      "稳定输出，比偶尔爆发更重要。",
      "把注意力放在眼前这一件事。"
    ]
  },
  stats: {
    title: "统计",
    subtitle: "回顾执行表现，看到你每天的稳定积累。",
    cards: {
      today: "今日专注完成",
      activeTasks: "进行中任务",
      streak: "连续专注"
    },
    panel: {
      title: "最近 7 天专注次数",
      total: (count) => `本周累计专注次数：${count}`
    },
    todayLabel: "今天",
    streakText: (days) => `${days} 天`
  },
  settings: {
    title: "设置",
    subtitle: "调整默认时长，让节奏更贴合你的学习或工作习惯。",
    sectionTitle: "番茄钟默认时长",
    labels: {
      workMinutes: "专注时长（分钟）",
      breakMinutes: "休息时长（分钟）"
    },
    actions: {
      save: "保存",
      reset: "重置"
    },
    messages: {
      saved: "设置已保存，下次打开仍会生效。",
      reset: "已恢复默认值。"
    }
  }
};
