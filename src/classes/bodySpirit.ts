import Human from "./human"
import Spirit from "./spirit"

export default class BodySpirit extends Spirit
{
    body: Human

    constructor(body: Human)
    {
        super()
        this.body = body
    }


    getBody(): Human
    {
        return this.body
    }
}