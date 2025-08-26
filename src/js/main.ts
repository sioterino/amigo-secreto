import FormController from "./controller/FormController"
import ListController from "./controller/ListController";
import SorterController from "./controller/SorterController";
import ListService from "./service/ListService";
import SorterService from "./service/SorterService";


const listService = new ListService()
const list = document.querySelector('.lista') as HTMLDivElement
const template = document.querySelector<HTMLTemplateElement>("#card-template")!
const listController = new ListController(list, listService, template)

const sorterService = new SorterService(listService)
const sortButton = document.querySelector('.sorter-button') as HTMLButtonElement
new SorterController(sortButton, sorterService, list, listService)

const form = document.querySelector('form') as HTMLFormElement
new FormController(form, listController)