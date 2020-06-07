interface Human {
  // 接口不能约束类的构造函数 接口只能约束类的公有成员
  // new (name: string): void
  name: string
  eat(): void
}

// 类实现接口 必须实现接口中的所有属性和方法 可以额外添加新方法
class Asian implements Human {
  name: string
  constructor(name: string) {
    this.name = name
  }
  eat() {}
  sleep() {} // 可以额外添加新方法
}

// 接口继承接口 一个接口可以同时继承多个接口
interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

interface Boy extends Man, Child {}
// 定义一个boy对象 符合Boy接口的结构
let boy: Boy = {
  name: '',
  eat() {},
  run() {},
  cry() {}
}

// 接口继承类 将类的成员抽象出来：只有类的成员结构，没有具体实现
class Auto {
  state = 1
  private state2 = 0
}
class D extends Auto {
  // private state2 = 6
}

interface AutoInterface extends Auto {}

class C extends Auto implements AutoInterface {
  //state = 1
  //private state2 = 0
  // C不是Auto的子类，因此不能包含非公有成员； C是Auto的子类时也不能再次定义父类中存在的私有属性
  // private state2 = 6
}
let c = new C()
console.log(c.state)

class Bus extends Auto implements AutoInterface {
  // Bus类自动继承Auto类的state
}
