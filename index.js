const createRectangle = ({left, top, width, height}) => {
	const rectangle = document.createElement("div")
	rectangle.setAttribute(
		"style",
		`
				position: fixed;
				left: ${left - 5}px;
				top: ${top - 5}px;
				width: ${width + 15}px;
				height: ${height + 15}px;
				border: 3px dashed red;
				z-index: 1000000;
			`
	)

	return rectangle
}

const createElementHighlighter = (element) => {
	return createRectangle(element.getBoundingClientRect())
}

Cypress.Commands.add("generateTranslationScreenshots", () => {
	const dataKey = "tkey"

	cy.get("body").then(($body) => {
		if ($body.find(`[data-${dataKey}]`).length) {
			cy.get("body")
				.find(`[data-${dataKey}]`)
				.each(($el) => {
					const tkey = $el.data(dataKey)
					const highlighter = createElementHighlighter($el[0])

					cy.window().then((win) => {
						win.document.body.appendChild(highlighter)
					})

					console.log(`📸 Creating a screenshot for ${tkey}}`)
					cy.screenshot(`__tkey-${tkey}`)

					cy.window().then((win) => {
						win.document.body.removeChild(highlighter)
					})
				})
		}
	})
})

