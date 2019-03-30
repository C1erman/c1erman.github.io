/*选择区域内的标题列表*/
var header_in_block = ({
	Id,
	/*提取容器id*/
	Class,
	/*提取容器class*/
	Type = 'div',
	/*提取容器类型*/
	box_id /*填充容器id*/
}) => {
	/*初始容器*/
	let container, box;
	Id ? container = document.getElementById(Id) :
		container = document.querySelector(`${Type}.${Class}`);
	box = document.getElementById(box_id);
	/*初始样式*/
	let styles = {
		'H1': ['display:inline-block', 'border:none'],
		'H2': ['display:block', 'margin-left:1%', 'border:none'],
		'H3': ['display:block', 'margin-left:3%', 'border:none'],
		'H4': ['display:block', 'margin-left:5%', 'border:none'],
		'H5': ['display:block', 'margin-left:7%', 'border:none'],
		'H6': ['display:block', 'margin-left:9%']
	}
	/*获取所有标题节点*/
	let allHeader = new Array();
	(Array.from(container.childNodes)).map((value, index) => {
		if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(value.nodeName)) {
			/*如果存在id则获取id，如果不存在则分配id*/
			value.id = value.id || value.setAttribute('test', value.innerText);
			allHeader.push({
				'name': value.nodeName,
				'id': value.id,
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

};