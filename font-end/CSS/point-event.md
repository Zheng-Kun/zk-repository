# pointer-events语法：

```css
pointer-events：auto | none | visiblepainted | visiblefill | visiblestroke | visible | painted | fill | stroke | all;
```



- 默认值： auto

- pointer-events取值：

> 对于浏览器来说，只有auto和none两个值可用，其它的几个是针对SVG的(本身这个属性就自于SVG)。

- pointer-events作用（值为none时）：

1. 阻止用户的点击动作产生任何效果
2. 阻止缺省鼠标指针的显示
3. 阻止CSS里的 hover 和 active 状态的变化触发事件
4. 阻止JavaScript点击动作触发的事件