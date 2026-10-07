import { canvasFetch, writesEnabled } from "../../../../lib/canvas";
export async function POST(request){
 if(!writesEnabled()) return Response.json({error:"Canvas writes are disabled. Set CANVAS_WRITE_ENABLED=true only after dry-run verification."},{status:403});
 const {courseId,assignmentId,userId,grade,feedback,approved}=await request.json();
 if(!approved) return Response.json({error:"Explicit approval is required."},{status:400});
 if(!courseId||!assignmentId||!userId||grade==null||!feedback) return Response.json({error:"Missing required grading fields."},{status:400});
 const body=new URLSearchParams(); body.set("submission[posted_grade]",String(grade)); body.set("comment[text_comment]",feedback);
 try{return Response.json(await canvasFetch(`/courses/${courseId}/assignments/${assignmentId}/submissions/${userId}`,{method:"PUT",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:body.toString()}));}catch(e){return Response.json({error:e.message},{status:500});}
}
