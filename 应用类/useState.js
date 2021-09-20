/**
 * 实现一个useState
 */
function App() {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);
  document.getElementById("num").innerHTML = num;
  document.getElementById("num1").innerHTML = num1;
  return {
    onClick: () => {
      setNum(num => {
       console.log(num); // 0 从次处开始处理
       return num + 1
      });
      setNum(num => num + 2);
      setNum(num => num + 3);
      setNum(num => num + 4);
      setNum(num => num + 5);
    },
    onClick2 () {
      setNum1(num => num + 1);
    }
  }
}

// App() 0 App.onClick() 1

/**
 * 1. 实现运行环境
 */
let isMount = true;
let workInProgressHook = null;

const fiber = {
  stateNode: App, // 函数式组件
  memorizedState: null, 
  // 链表结构
  // 记录当前fiber对应的状态信息，在fc中，该属性记录为fiber结点挂载的hook，
  // 在class组件中，记录当前组件的state
}

// 调度函数
function schedule() {
  console.log("useState")
  workInProgressHook = fiber.memorizedState;
  console.log("workInProgressHook", workInProgressHook)
  // 为方便观察，用app变量记录返回值
  const app = fiber.stateNode();
  isMount = false;
  window.app = app;
  // app.onClick() // 1
}

function useState(initialState) {
  // --------找到当前useState对应的hook结点
  let hook;
  if (isMount) {
    hook = {
      memorizedState: initialState,
      next: null,
      queue: { // 为应对多次action触发的情况而定义的结构
        pending: null,
      }
    }
    if (!fiber.memorizedState) {
      fiber.memorizedState = hook;
    } else {
      /**
       * 初始化时定义了多个useState
       * const [num1, setNum1] = useState(0)
       * const [num2, setNum2] = useState(0)
       */
      workInProgressHook.next = hook;
    }
    workInProgressHook = hook;
  } else {
    hook = workInProgressHook;
    workInProgressHook = workInProgressHook.next;
  }
  console.log(hook);
  // TODO: 更新状态
  let baseState = hook.memorizedState;
  if (hook.queue.pending !== null) {
     let update = null;
     const firstUpdate = hook.queue.pending.next;
     do {
       const action = hook.queue.pending.action;
       baseState = action(baseState);
       hook.queue.pending = hook.queue.pending.next;
      // update = hook.queue.pending.next;
      // baseState = firstUpdate(baseState);
      // hook.queue.pending = hook.queue.pending.next;
     } while(hook.queue.pending !== firstUpdate);
     hook.queue.pending = null;
   }
   hook.memorizedState = baseState;
   return [hook.memorizedState, dispatchAction.bind(null, hook.queue)]
}

/**
 * update状态的方法
 */
function dispatchAction(queue, action) {
  /**
   * 定义一种链表的数据结构,应对一个fiber多个action的情况
   */
  const update = {
    action,
    next: null,
  }
  if (queue.pending === null) {
    update.next = update; // 成环结构 u0 -> u0 (-> u0)
  } else {
    // u0 -> u0 变为 u1 -> u0 -> u1
    update.next = queue.pending;
    queue.pending.next = update;
  }
  // 最末触发的action一定在queue的头部
  queue.pending = update;
  schedule(); // 执行一次调度
}