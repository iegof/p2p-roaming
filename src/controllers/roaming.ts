import { Context } from "koa";
const axios = require('axios');
export default class RoaminglController {

    public static async index(ctx: Context ): Promise<void> {

        const options = {
            headers: ctx.request.headers
          };

        if (ctx.method == "POST")
        {
            axios.post(process.env.ROAMING_URL+ctx.url, ctx.request.body, options).then((response: any) => {
                ctx.body=response;
              }, (error: any) => {
                ctx.body=error;
              });
        }
        else if ( ctx.method == "PUT")
        {
            axios.put(process.env.ROAMING_URL+ctx.url, ctx.request.body, options).then((response: any) => {
                ctx.body=response;
              }, (error: any) => {
                ctx.body=error;
              });
        }
        else if ( ctx.method == "GET")
        {
            axios.get(process.env.ROAMING_URL+ctx.url, options).then((response: any) => {
                ctx.body=response;
              }, (error: any) => {
                ctx.body=error;
              });
        }
    }
}