export default class Menu {
  constructor () {
    this.dom = document.createElement('div')
    this.dom.className = 'mac-context-menu'
    document.body.appendChild(this.dom)
    this.listen()
  }

  add (args) {
    if (args === '-') {
      this.dom.appendChild(document.createElement('hr'))
    } else {
      const item = new MenuItem(args)
      item.contextmenu = this
      this.dom.appendChild(item.dom)
    }
  }

  show (x, y) {
    this.isShow = true
    this.dom.style.display = 'block'
    this.dom.style.left = `${x}px`
    this.dom.style.top = `${y}px`
  }

  hide () {
    this.dom.isShow = false
    this.dom.style.display = 'none'
  }

  listen () {
    this.dom.addEventListener('contextmenu', (event) => {
      event.stopPropagation()
      event.preventDefault()
    })
    this.dom.addEventListener('mousedown', (event) => {
      event.stopPropagation()
    })
    this.dom.addEventListener('click', (event) => {
      event.stopPropagation()
    })
  }
}

class MenuItem {
  constructor ({ title, action }) {
    this.action = action
    this.initDom()
    this.listenAction()
    this.title = title
    this.active = true
  }

  initDom () {
    this.dom = document.createElement('div')
    this.dom.className = 'mac-context-menuitem'
  }

  listenAction () {
    this.dom.addEventListener('mouseup', (event) => {
      event.stopPropagation()
      if (this.action && this.active) this.action()
      // this.contextmenu.hide()
    })
  }

  set title (title) {
    this.dom.innerHTML = title || 'Untitled'
  }
}

setTimeout(() => {
  const style = document.createElement('style')
  style.innerHTML = `
.mac-context-menu {
  display: none;
  position: fixed;
  top: 50px;
  left: 50px;
  min-width: 150px;
  min-height: 50px;

  margin: 0;
  padding: 4px 0 5px;

  background: rgba(239, 239, 239, 0.95);
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.34);
  border-radius: 7px;

  color: rgba(0, 0, 0, 0.75);
  font-family: -apple-system, Lucida Grande;
  font-size: 14px;
  line-height: 15px;
  cursor: default;
  z-index: 100000;
}

.mac-context-menu::before {
  display: block;
  position: absolute;
  content: "";
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
  
  border-radius: 7px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  z-index: -1;
}

.mac-context-menu hr {
  border: none;
  height: 2px;
  background: rgba(0, 0, 0, 0.08);
  margin: 6px 0px 5px;
  padding: 0;
}

.mac-context-menu .mac-context-menuitem {
  display: block;
  padding: 1px 20px;
  user-select: none;
  vertical-align: 2px;
  content: attr(label);
}

.mac-context-menu .mac-context-menuitem:hover {
  background: #4195fa;
}

.mac-context-menu .mac-context-menuitem:hover {
  color: #fff;
}
  `
  document.head.appendChild(style)
})
