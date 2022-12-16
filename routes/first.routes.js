import { Router } from "express"

Router.get('/', (req, res, next) =>{
    res.send('Test Server Success')
});


export default Router