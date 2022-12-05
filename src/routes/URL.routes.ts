import { Router, Request, Response } from 'express';
import { createURL, fetchUrlById } from '../repository/URL.repo'
import {v4 as uuidv4} from 'uuid';
export const URLRouter = Router();
export const redirectShortUrl = Router();


URLRouter.post('/new', async (req: Request, res: Response) => {
    const ogUrl = req.body.ogUrl as string;

    if (!ogUrl) {
        res.status(400)
        return res.send({
            message: 'No original url was provided'
        })
    }
    
    // Si tengo mi url
    // Debo crear un nuevo URL y guardarlo a la DB
    // pero primero creo el id unico
    const newId =  uuidv4().split('-')[0];
    const newURL = await createURL(newId, ogUrl);

    res.status(201);
    res.json({
        newURL: 'http://'+<string>process.env.DB_HOSTNAME+':3000/url/'+ newURL,
    })
})

URLRouter.get('/:shorturl', async (req: Request, res: Response) => {
    const shorturl = req.params['shorturl'] as string

    if (!shorturl) {
        res.status(400);
        res.send({
            error: 'No ID provided'
        })
    }

    const Url = await fetchUrlById(shorturl);

    if (!Url) {
        res.status(400);
        return res.send({
            error: 'No URL with this ID was found'
        })
    }

    return res.redirect(Url);
})


