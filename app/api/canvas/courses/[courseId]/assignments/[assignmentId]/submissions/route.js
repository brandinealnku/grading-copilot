import { canvasFetch } from "../../../../../../../../lib/canvas";
export async function GET(_request,{params}){try{const {courseId,assignmentId}=await params;return Response.json(await canvasFetch(`/courses/${courseId}/assignments/${assignmentId}/submissions?include[]=user&include[]=submission_comments&per_page=100`));}catch(e){return Response.json({error:e.message},{status:500});}}
