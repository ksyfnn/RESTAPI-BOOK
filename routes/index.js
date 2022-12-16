import { Router } from "express";
import firstRoute from './first.routes.js'


Router.use('/', firstRoute)

export default Router