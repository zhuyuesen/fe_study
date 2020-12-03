/**
 * 20-11-06
 * js 用js实现一个标准的排序算法(快速排序，冒泡，选择排序)
 */

// 快速排序：
// 1. 找一个基准点(一般为数组中位数)，
// 2. 声明left，right数组，for循环数组，比中位数小的放left数组，比中位数大的放right数组
// 3. 递归left，right数组排序并返回值

function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    // 数组中位数的index
    let minIndex = Math.floor(arr.length/2)

    // [中位数]
    let midArr = arr.splice(minIndex, 1);

    // 中位数
    let midVal = midArr[0]

    const left = [];
    const right = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] <= midVal){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    // 递归调用排序并返回值
    return quickSort(left).concat(midVal, quickSort(right));
}

// 冒泡排序：
// 1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
// 2. 对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。 
// 3. 针对所有的元素重复以上的步骤，除了最后一个。
// 4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

function bubbleSort(arr){
    var len = arr.length;
    for(let i = 0; i <len; i++){
        for(let j = 0; j <len-1-i;j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// 选择排序：
// 它的工作原理是：第一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，
// 然后再从剩余的未排序元素中寻找到最小（大）元素，然后放到已排序的序列的末尾。以此类推，直到全部待排序的数据元素的个数为零。
// 选择排序是不稳定的排序方法

function selesctionSort(arr){
    let len = arr.length;
    var minIndex, temp;
    for(var i = 0; i< len -1;i++){
        // 设默认最小值index为当前i
        minIndex = i;
        for(var j = i+1; j<len; j++){
            if(arr[j] < arr[minIndex]){ // 当便利到的j比i小时，设minIndex为j
                minIndex = j;
            }
        }
        // 置换i与minnIndex
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// 算法的稳定与不稳定：
// 稳定：如果a在b的前面，而a = b, 排序后a仍在b的前面；
// 不稳定：如果a在b的前面，而a = b, 排序后a可能会出现在b的后面；

// 内排序与外排序：
// 内排序：所有的排序都在内存中完成；
// 外排序：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；

// 时间复杂度 空间复杂度：
// 时间复杂度： 一个算法执行所耗费的时间
// 空间复杂度： 运行完一个程序所需内存的大小