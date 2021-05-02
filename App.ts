import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import {RecipeModel} from './Models/RecipeModel';


class App {
    public expressApp: express.Application;
    public idGenerator: number;
    public recipes: RecipeModel;

    constructor() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.recipes = new RecipeModel();
        
        // this.reviews = new ReviewModel();
        // this.users = new UserModel();
        
    }

    // Configure Express middleware.
    private middleware(): void {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        let router = express.Router();

        router.get('/recipes', (req, res) => {

            this.recipes.retrieveAllRecipes(res);
        })
        
        this.expressApp.use('/', router);
        
        this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
        this.expressApp.use(express.static("img"));
        this.expressApp.use('/', express.static(__dirname+'/pages'));

    }



}

export {App};