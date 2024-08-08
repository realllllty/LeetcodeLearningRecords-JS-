// 定义一个函数，用于计算时间段
function calculateTimePeriod(item) {
    // 从传入的对象中解构出所需的属性
    const { startTime, endTime, dynamicTimeType } = item;
    
    // 获取当前的日期
    const currentDate = new Date();
    // 计算实际的结束时间，它是当前日期减去endTime天数
    // 注意：这里创建了一个新的Date实例，以避免修改原始的currentDate

    // getTime() 方法返回一个时间的格林威治时间数值
    const endDate = new Date(currentDate.getTime());
    // 设定endDate为这个月的(对应endTime)所指定的时间
    endDate.setDate(endDate.getDate() - endTime);
    
    
    // 定义一个函数，根据时间类型和数量来调整日期
    function adjustDate(date, type, amount) {
      // 创建新的日期实例，以避免直接修改原始参数
      const newDate = new Date(date);
      switch (type) {
        case 'DAY':
          // 减去指定的天数
          newDate.setDate(newDate.getDate() - amount);
          break;
        case 'WEEK':
          // 减去指定的周数，首先找到当前周的第一天（周一），然后减去周数*7的天数
          newDate.setDate(newDate.getDate() - (newDate.getDay() === 0 ? 6 : newDate.getDay() - 1) - (amount * 7));
          break;
        case 'MONTH':
          // 减去指定的月数，设置日期为月份的第一天
          newDate.setMonth(newDate.getMonth() - amount, 1);
          break;
        case 'QUARTER':
          // 减去指定的季度数，找到当前季度的第一个月，然后减去季度数*3的月数
          const currentMonth = newDate.getMonth();
          const monthToQuarterStart = currentMonth % 3;
          newDate.setMonth(newDate.getMonth() - monthToQuarterStart - (amount * 3), 1);
          break;
        case 'YEAR':
          // 减去指定的年数，设置日期为年份的第一天
          newDate.setFullYear(newDate.getFullYear() - amount, 0, 1);
          break;
        default:
          throw new Error('Invalid time type');
      }
      return newDate;
    }
  
    // 计算开始时间
    let startDate;
    if (dynamicTimeType === 'DAY') {
      // 如果时间单位是“天”，则基于当前时间计算
      startDate = adjustDate(new Date(), 'DAY', startTime);
    } else {
      // 如果是其他时间单位，则基于结束时间计算
      startDate = adjustDate(endDate, dynamicTimeType, startTime);
    }
    
    // 检查开始时间是否大于结束时间
    if (startDate > endDate) {
      console.error('开始时间不能大于结束时间');
      // 假设你有一个输入框的id是'input-start-time'，将其边框设置为红色以表示错误
      document.getElementById('input-start-time').style.borderColor = "red";
      return '开始时间不能大于结束时间';
    } else {
      // 如果没有错误，移除之前可能设置的边框颜色
      document.getElementById('input-start-time').style.borderColor = "";
    }
    
    // 返回计算出的时间段，格式为YYYY-MM-DD
    return {
      startTime: startDate.toISOString().split('T')[0],
      endTime: endDate.toISOString().split('T')[0]
    };
  }
  
  // 示例用法：
  const timePeriod = calculateTimePeriod({
    startTime: 1, // 表示前1个时间单位
    endTime: 1, // 表示当前日期前1天
    dynamicTimeType: 'WEEK' // 时间单位是“周”
  });
  
  console.log(timePeriod);
  