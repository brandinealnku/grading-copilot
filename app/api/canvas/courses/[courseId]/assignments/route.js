import { canvasFetch } from "../../../../../../lib/canvas";
export async function GET(_request,{params}){try{const {courseId}=await params;return Response.json(await canvasFetch(`/courses/${courseId}/assignments?per_page=100&order_by=due_at`));}catch(e){return Response.json({error:e.message},{status:500});}}
