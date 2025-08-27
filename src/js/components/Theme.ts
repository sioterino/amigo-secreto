import type Storage from "../utils/Storage"

class Theme {

    private light: HTMLSpanElement
    private dark: HTMLSpanElement
    private repo: Storage<string>
    private theme: 'dark' | 'light' = 'dark'

    constructor(light: HTMLSpanElement, dark: HTMLSpanElement, repo: Storage<string>) {
        this.light = light
        this.dark = dark
        this.repo = repo

        this.setUserPreference()

        this.light.addEventListener('click', () => this.toggleTheme())
        this.dark.addEventListener('click', () => this.toggleTheme())
    }

    private setUserPreference() {
        const local = this.repo.loadFromLocalStorage()
        if (local) {
            const isDark: boolean = local[0] === 'dark' // fix typo
            this.theme = this.applyPreference(isDark)
        } else {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            this.theme = this.applyPreference(isDark)
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
                const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                this.theme = this.applyPreference(isDark)
            })
        }
    }

    private applyPreference(isDark: boolean): 'dark' | 'light' {
        const root = document.documentElement

        if (isDark) {
            root.classList.add('dark')
            this.light.classList.remove('hidden')
            this.dark.classList.add('hidden')
            return 'dark'
        } else {
            root.classList.remove('dark')
            this.dark.classList.remove('hidden')
            this.light.classList.add('hidden')
            return 'light'
        }
    }

    private toggleTheme() {
        if (this.theme === 'dark') {
            this.theme = 'light'
            document.documentElement.classList.remove('dark')
            this.dark.classList.remove('hidden')
            this.light.classList.add('hidden')
        } else {
            this.theme = 'dark'
            document.documentElement.classList.add('dark')
            this.light.classList.remove('hidden')
            this.dark.classList.add('hidden')
        }

        this.repo.saveToLocalStorage([this.theme])
    }

}

export default Theme
