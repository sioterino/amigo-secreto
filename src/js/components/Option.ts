class Option {

    public static option(value: string, text: string): HTMLOptionElement {
        const element = document.createElement('option')
        element.value = value
        element.textContent = text
        return element
    }

}

export default Option