import { canvasFetch } from "../../../../lib/canvas";
export async function GET(){try{return Response.json(await canvasFetch("/courses?enrollment_type=teacher&enrollment_state=active&per_page=100"));}catch(e){return Response.json({error:e.message},{status:500});}}
