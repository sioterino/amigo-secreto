class Heading {

    public static h2(text: string): HTMLHeadingElement {
        const element = document.createElement('h2')
        element.textContent = text
        return element
    }

}

export default Heading