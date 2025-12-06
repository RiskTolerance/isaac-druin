export function clickToCopy(
	node: HTMLElement,
	target?: string
): { destroy: () => void } {
	async function copyText() {
		const targetElement = target ? document.querySelector<HTMLElement>(target) : null;
		const text = targetElement?.innerText ?? node.innerText;
		
		try {
			await navigator.clipboard.writeText(text);
			
			node.dispatchEvent(
				new CustomEvent('copysuccess', {
					bubbles: true
				})
			);
		} catch (error: unknown) {
			node.dispatchEvent(
				new CustomEvent('copyerror', {
					bubbles: true,
					detail: error
				})
			);
		}
	}
	
	node.addEventListener('click', copyText);
	
	return {
		destroy() {
			node.removeEventListener('click', copyText);
		}
	};
}