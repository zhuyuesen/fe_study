
// 订阅者 Dep
class Dep {
    constructor () {
        this.subs = []; /* 用来存放Watcher对象的数组 */
    }
    addSub (sub) { /* 在subs中添加一个Watcher对象 */
        this.subs.push(sub);
    }
    notify () { /* 通知所有Watcher对象更新视图 */
        this.subs.forEach((sub) => {
            sub.update();
        })
    }
}

// 观察者 Watcher
class Watcher {
    constructor () {
        /* 在new一个Watcher对象时将该对象赋值给Dep.target，在get中会用到 */
        Dep.target = this;
    }
    update () { /* 更新视图的方法 */
        console.log("视图更新啦～");
    }
}
// Dep.target = null;

function observer (value) {
    console.log('observer')
    if (!value || (typeof value !== 'object')) {
        return;
    }
    Object.keys(value).forEach((key) => {
        defineReactive(value, key, value[key]);
    });
}

// 依赖收集
function defineReactive (obj, key, val) {
    console.log('defineReactive')
    /* 一个Dep类对象 */
    const dep = new Dep();
    console.log('dep')
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter () {
            /* 将Dep.target（即当前的Watcher对象存入dep的subs中） */
            console.log('Dep.target', Dep.target)
            dep.addSub(Dep.target);
            console.log('dep', dep)
            return val;         
        },
        set: function reactiveSetter (newVal) {
            if (newVal === val) return;
            /* 在set的时候触发dep的notify来通知所有的Watcher对象更新视图 */
            dep.notify();
        }
    });
}

class Vue {
    constructor(options) {
        this._data = options.data;
        observer(this._data);
        /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
        var watcher = new Watcher();
        // console.log('watcher watcher watcher', watcher)
        /* 在这里模拟render的过程，为了触发test属性的get函数 */
        console.log('render~', this._data.test);
    }
}

new Vue({
    data: {
        test: '123'
    }
})