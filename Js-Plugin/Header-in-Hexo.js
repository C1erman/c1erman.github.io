//添加事件监听器
window.addEventListener('load', toUse, false);
window.addEventListener('resize', toUse, false);
//判断何时调用函数
function toUse() {
	let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	block_catalog(w, h);
	//	w <= 450 || h <="800" ? (document.getelementbyid('_menu').innerhtml header_in_block({ class: 'post-body' })) : clearspace('_menu'); w (block_catalog(w, h), }))) } *清除占据空间* var clearspace="(id)" => {
	let box = document.getElementById(id);
	box.innerHTML = '';
	box.style = '';
}
/*为有inline-style的指定的元素display取反*/
function anti_display() {
	let _item = document.getElementById('_menu');
	let to_block_regexp = /display: none|display:none/;
	let style = _item.getAttribute('style');
	to_block_regexp.test(style) ?
		_item.setAttribute('style', style.replace(/display: none|display:none/, 'display:block')) :
		_item.setAttribute('style', style.replace(/display: block|display:block/, 'display:none'));
}
/*选择区域内的标题列表*/
var header_in_block = ({
	Id,
	/*提取容器id*/
	Class,
	/*提取容器class*/
	Type = 'div',
	/*提取容器类型*/
	box_id = '_menu' /*填充容器id*/
}) => {
	/*初始容器*/
	let container, box;
	Id ? container = document.getElementById(Id) :
		container = document.querySelector(`${Type}.${Class}`);
	box = document.getElementById(box_id);
	/*初始样式*/
	let styles = {
		'H1': ['display:inline-block', 'margin-left:1%', 'border:none'],
		'H2': ['display:block', 'margin-left:3%', 'border:none'],
		'H3': ['display:block', 'margin-left:5%', 'border:none'],
		'H4': ['display:block', 'margin-left:7%', 'border:none'],
		'H5': ['display:block', 'margin-left:9%', 'border:none'],
		'H6': ['display:block', 'margin-left:11%']
	}
	/*获取所有标题节点*/
	let allHeader = new Array();
	(Array.from(container.childNodes)).map((value, index) => {
		if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(value.nodeName)) {
			/*如果存在id则获取id，如果不存在则分配id*/
			value.id = value.id || value.setAttribute('given_id', value.innerText);
			allHeader.push({
				'name': value.nodeName,
				'id': value.id || given_id,
				'text': value.innerText
			});
		}
	});
	console.log(allHeader)
	/*将结果直接插入到网页中*/
	/*依据offset进行排列*/
	for (let i = 0; i < allHeader.length; i++) {
		/*初始赋值*/
		let a = document.createElement('a');
		a.setAttribute('href', `#${allHeader[i].id}`);
		a.style = styles[allHeader[i].name].join(';');
		a.innerText = allHeader[i].text;
		if (i == 0) {
			box.appendChild(a);
			/*添加新属性——便于判断节点位置*/
			allHeader[i].node = a;
			continue;
		}
		/*判断父子关系*/
		if (allHeader[i].name > allHeader[i - 1].name) {
			/*作为子节点插入*/
			allHeader[i - 1].node.appendChild(a);
			allHeader[i].node = a;
		} else if (allHeader[i].name == allHeader[i - 1].name) {
			/*作为兄弟节点插入*/
			allHeader[i - 1].node.parentNode.insertBefore(a, null);
			allHeader[i].node = a;
		} else if (allHeader[i].name < allHeader[i - 1].name) {
			/*从前往后寻找最近的兄弟节点插入*/
			let t_node;
			for (let j = i - 1; j >= 0; j--) {
				if (allHeader[j].name === allHeader[i].name) {
					t_node = allHeader[j].node;
					break;
				}
			}
			t_node.parentNode.insertBefore(a, null);
			allHeader[i].node = a;
		}
	}
}
/*将在移动端侧边添加跟随目录*/
var block_catalog = (width, height) => {
	const w = Math.floor(width * 0.15),
		h = w;
	const body = document.getElementsByTagName('body')[0];
	/*实例按钮*/
	let botton = document.createElement('div');
	let botton_style = {
		'position': 'fixed',
		'width': `${w}px`,
		'height': `${h}px`,
		'left': `${-w*0.5}px`,
		'top': `${height*0.5-w*0.5}px`,
		'borderRadius': '50%',
		'background': 'rgba(246,246,246,0.7)',
		'boxShadow': '1px 0px 5px grey',
		'cursor': 'pointer'
	};
	for (let i in botton_style) {
		botton.style[i] = botton_style[i];
	}
	/*实例内容*/
	let content = document.createElement('div');
	let content_style = {
		'display': 'none',
		'position': 'fixed',
		'width': `${Math.floor(width*0.8)}px`,
		'height': `${Math.floor(height*0.9)}px`,
		'left': `${Math.floor(width*0.1)}px`,
		'top': `${Math.floor(height*0.03)}px`,
		'padding': '20px 10px',
		'overflow': 'auto',
		'borderRadius': '10px',
		'background': 'rgb(246,246,246)'
	}
	for (let i in content_style) {
		content.style[i] = content_style[i];
	}
	/*给予id*/
	content.setAttribute('id', '_menu');
	botton.setAttribute('id', '_menu_controller');
	/*事件监听*/
	botton.addEventListener('click', anti_display);
	/*插入*/
	body.appendChild(botton);
	body.appendChild(content);
}
/*数据结构：树*/
var _NODE = function(data) {
	this.data = data;
	this.parent = null;
	this.children = [];
}
var _TREE = function(data) {
	let node = new _NODE(data);
	this._ROOT = node;
}
_TREE.prototype. = function(argument) {

};</=>