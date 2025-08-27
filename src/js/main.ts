import Theme from "./components/Theme";
import FormController from "./controller/FormController"
import ListController from "./controller/ListController";
import SorterController from "./controller/SorterController";
import EmailService from "./service/EmailService";
import ListService from "./service/ListService";
import SorterService from "./service/SorterService";
import Storage from "./utils/Storage";

const themeRepo = new Storage('theme', (item: string) => item)
const light = document.querySelector('.day') as HTMLSpanElement
const dark = document.querySelector('.night') as HTMLSpanElement
new Theme(light, dark, themeRepo)

const listService = new ListService()
const list = document.querySelector('.lista') as HTMLDivElement
const template = document.querySelector<HTMLTemplateElement>("#card-template")!
const sortButton = document.querySelector('.sorter-button') as HTMLButtonElement
const clearButton = document.querySelector('.clear-button') as HTMLButtonElement
const listController = new ListController(list, listService, template, sortButton, clearButton)

 const emailService = new EmailService()

const sorterService = new SorterService(listService)
new SorterController(sortButton, sorterService, list, listService, emailService)

const form = document.querySelector('form') as HTMLFormElement
new FormController(form, listController)