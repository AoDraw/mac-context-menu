# mac-context-menu
Context menu in JavaScript with ugly ui like mac context menu.

![screenshot](https://aodraw.github.io/mac-context-menu/screenshot.png)

```
npm i mac-context-menu --save
```

e.g.

```javascript
import Menu from '../index'

const menu = new Menu()

menu.add({ title: '新增下级节点', action: () => console.log('1') }) // 文字和相应的行为
menu.add({ title: '新增同级节点', action: () => console.log('2') })
menu.add('-') // 添加分割线
menu.add({ title: '复制节点', action: () => console.log('3') })
menu.add({ title: '粘贴节点', action: () => console.log('4') })
menu.add({ title: '删除节点', action: () => console.log('5') })
menu.add('-')
menu.add({ title: '全选', action: () => console.log('6') })
menu.add({ title: '分离', action: () => console.log('7') })
menu.add('-')
menu.add({ title: '折叠', action: () => console.log('8') })
menu.add({ title: '展开', action: () => {
  console.log('9')
  menu.hide() // 隐藏菜单
}})

/* 在 x, y 位置显示 */
menu.show(0, 0)
```
