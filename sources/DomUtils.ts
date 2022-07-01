/**
 * Collction of DOM related utility methods
 */
class DomUtilsClass {
	ge: (id: string) => HTMLElement;
	getRenderedText: (text: string) => string;
	replaceNodes: (oldNode: Node, ...newNodes: (Node | string)[]) => void;
	constructor() {
		function ge(id: string) {
			return document.getElementById(id);
		}

		function getRenderedText(text: string) {
			const id = 'dom-utils-text-rendered';
			let rendered = ge(id);
			if(!rendered) {
				rendered = document.createElement('span');
				rendered.id = id;
				rendered.style.position = 'fixed';
				rendered.style.left = '-9999px';
				rendered.style.width = '0';
				rendered.style.height = '0';
				document.body.appendChild(rendered);
			}
			rendered.innerText = text;
			let renderedText = rendered.innerText;
			rendered.innerText = '';
			return renderedText;

		}

		function replaceNodes(oldNode: Node, ...newNodes: (Node | string)[]) {
			if(!oldNode.parentElement) {
				throw new Error("oldNode does not have parent");
			}
			if(!newNodes || !newNodes.length) {
				throw new Error("No nodes to insert");
			}
			let parent = oldNode.parentElement;
			var fragment = document.createDocumentFragment()
			fragment.append(...newNodes);
			parent.replaceChild(fragment, oldNode);
		}

		this.replaceNodes = replaceNodes;
		this.getRenderedText = getRenderedText;
		this.ge = ge;
	}

	removeCssClass(className: string, elements: Element[]): void;
	removeCssClass(className: string, elements: HTMLCollectionOf<Element>): void;
	removeCssClass(className: string): void;

	removeCssClass(className: string, elements?: Element[] | HTMLCollectionOf<Element>): void {
		if(typeof elements == 'undefined') {
			elements = document.getElementsByClassName(className);
		}
		if(!(elements instanceof Array)) {
			elements = Array.from(elements);
		}
		for(const elem of elements) {
			elem.classList.remove(className);
		}
	}

	/**
	 * Returns closest parent element for both nodes.
	 */
	getCommonParent(one: Node, two: Node): HTMLElement | null {
		let parent = one.parentElement;
		if(one === two) { //both nodes are the same node.
			return parent;
		}
		const contained = Node.DOCUMENT_POSITION_CONTAINED_BY;
		let docpos = parent.compareDocumentPosition(two);

		while(parent && !(docpos & contained)) {
			parent = parent.parentElement;
			docpos = parent.compareDocumentPosition(two);
		}
		return parent;
	}

	docReady(fn: () => void) {
		if(document.readyState === "complete" || document.readyState === "interactive") {
			setTimeout(fn, 1);
		} else {
			document.addEventListener("DOMContentLoaded", () => {
				fn();
				document.removeEventListener("DOMContentLoaded", fn)
			});
		}
	}
}
export const DomUtils = new DomUtilsClass();